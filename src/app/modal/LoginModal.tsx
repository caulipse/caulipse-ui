import { Box, Button, Typography } from '@material-ui/core';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import usePostLogin from '@src/hooks/remotes/user/usePostLogin';
import globalState from '@src/state';
import logoDefaultBlue from '@src/assets/img/logo/logoDefaultBlue.svg';
import { useAtom } from 'jotai';
import React, { KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { validateEmail } from '../shared/utils/validation';
import './loginModal.scss';

const LoginModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [loginSuccess, setLoginSuccess] = useState<boolean | undefined>();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [emailHelperText, setEmailHelperText] = useState<string>('');
	const [passwordHelperText, setPasswordHelperText] = useState<string>('');

	const postLogin = usePostLogin(setLoginSuccess);
	const [state, setState] = useAtom(globalState);
	const history = state.modal.params?.history;
	const openSnackbar = state.modal.params?.openSnackbar;

	const resetPw = () => {
		onClose(false);
		history.push('/reset-password');
	};

	const signUp = () => {
		onClose(false);
		history.push('/signup');
	};

	const onKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
		if (e.key === 'Enter') {
			handleLogin();
		}
	};

	const handleLogin = useCallback(() => {
		let canLogin = true;
		if (!email) {
			setEmailHelperText('이메일을 입력해 주세요.');
			canLogin = false;
		} else if (!validateEmail(email)) {
			setEmailHelperText('이메일 형식이 잘못되었습니다.');
			canLogin = false;
		}
		if (!password) {
			setPasswordHelperText('비밀번호를 입력해 주세요.');
			canLogin = false;
		}
		if (canLogin) postLogin.mutate({ email, password });
	}, [email, password]);

	useEffect(() => {
		if (loginSuccess === undefined) {
			return;
		}

		if (loginSuccess) {
			setState({
				...state,
			});
			onClose(false);
			openSnackbar('로그인에 성공하였습니다.');
		} else {
			setEmailHelperText('가입하지 않은 아이디거나, 잘못된 비밀번호입니다.');
			setPasswordHelperText('가입하지 않은 아이디거나, 잘못된 비밀번호입니다.');
			setLoginSuccess(undefined);
		}
	}, [loginSuccess]);

	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<Box className="login-modal-con">
				<IoClose className="login-modal-close-icon" color="#212b36" onClick={() => onClose(false)} />
				<Box className="login-modal-body-con">
					<img src={logoDefaultBlue} alt="로고" className="login-modal-logo" />
					<Box className="login-modal-body-subtitle">스터디, 중앙대 안에서 찾아보세요!</Box>
					<CommonTextField
						className="login-modal-body-login-input"
						value={email}
						label="포탈 이메일"
						onChange={(e) => setEmail(e.target.value)}
						type={emailHelperText ? 'error' : 'default'}
						textFieldProps={{
							type: 'email',
							onFocus: () => {
								setEmailHelperText('');
							},
							onKeyPress,
						}}
						helperText={emailHelperText}
					/>
					<CommonTextField
						className="login-modal-body-pw-input"
						value={password}
						label="비밀번호"
						onChange={(e) => setPassword(e.target.value)}
						textFieldProps={{
							type: 'password',
							onFocus: () => {
								setPasswordHelperText('');
							},
							onKeyPress,
						}}
						type={passwordHelperText ? 'error' : 'default'}
						helperText={passwordHelperText}
					/>
					<CommonButton className="mt1_5rem" type={ButtonTypeEnum.primary} title="로그인" onClick={handleLogin} />
					<Box className="login-modal-body-btns-con">
						<Button className="login-modal-body-text-btn" variant="text" onClick={signUp}>
							회원가입
						</Button>
						<Box className="login-modal-body-vertical-divider" />
						<Button className="login-modal-body-text-btn" variant="text" onClick={resetPw}>
							암호찾기
						</Button>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};

export default LoginModal;
