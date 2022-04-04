import { Box, Button, Typography } from '@material-ui/core';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import React, { useCallback, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import './loginModal.scss';

const LoginModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [emailHelperText, setEmailHelperText] = useState<string>('');
	const [passwordHelperText, setPasswordHelperText] = useState<string>('');

	const handleLogin = useCallback(() => {
		// TODO: handleLogin
		if (!email) {
			setEmailHelperText('이메일을 입력해 주세요.');
		}
		if (!password) {
			setPasswordHelperText('비밀번호를 입력해 주세요.');
		}
	}, [email, password]);

	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<Box className="login-modal-con">
				<IoClose className="login-modal-close-icon" color="#212b36" onClick={() => onClose(false)} />
				<Box className="login-modal-body-con">
					<Typography>중대본</Typography>
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
						}}
						type={passwordHelperText ? 'error' : 'default'}
						helperText={passwordHelperText}
					/>
					<CommonButton className="mt1_5rem" type={ButtonTypeEnum.primary} title="로그인" onClick={handleLogin} />
					<Box className="login-modal-body-btns-con">
						<Button className="login-modal-body-text-btn" variant="text">
							회원가입
						</Button>
						<Box className="login-modal-body-vertical-divider" />
						<Button className="login-modal-body-text-btn" variant="text">
							암호찾기
						</Button>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};

export default LoginModal;
