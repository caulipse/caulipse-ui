import { Box, Button, Typography } from '@material-ui/core';
import { validateCAUEmail, validateEmail, validatePassword } from '@src/app/shared/utils/validation';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logoDefaultBlue from '@src/assets/img/logo/logoDefaultBlue.svg';
import './index.scss';
import usePostSignup from '@src/hooks/remotes/user/usePostSignUp';
import useFetchEmailDuplicate from '@src/hooks/remotes/user/useFetchEmailDuplicate';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { sha256 } from 'js-sha256';
import config from '@src/config';

interface SignUpFirstStepProps {
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	goToNextStep: () => void;
}

const SignUpFirstStep = ({ email, setEmail, password, setPassword }: SignUpFirstStepProps): JSX.Element => {
	const history = useHistory();
	const postSignup = usePostSignup();
	const { openSnackbar } = useSnackbar();

	const [emailHelperText, setEmailHelperText] = useState<string>('');
	const [passwordHelperText, setPasswordHelperText] = useState<string>('');
	const [clientSuccess, setClientSuccess] = useState<boolean>(false);
	const [emailValidationEnabled, setEmailValidationEnabled] = useState<boolean>(false);

	const { data, isLoading } = useFetchEmailDuplicate(email, emailValidationEnabled);

	const handleNavigateSignUp = async () => {
		let emailSuccess = false;
		let pwSuccess = false;

		if (!email) {
			setEmailHelperText('이메일을 입력해 주세요.');
		} else if (!validateEmail(email) || !validateCAUEmail(email)) {
			setEmailHelperText('이메일 양식이 올바르지 않습니다. 중앙대 이메일을 사용해주세요.');
		} else {
			emailSuccess = true;
		}

		if (!password) {
			setPasswordHelperText('비밀번호를 입력해 주세요.');
		} else if (!validatePassword(password)) {
			setPasswordHelperText('영문, 숫자를 혼합한 8자 이상이어야 합니다.');
		} else {
			pwSuccess = true;
		}

		setEmailValidationEnabled(true);
		setClientSuccess(emailSuccess && pwSuccess);
	};

	const handleNavigateResetPw = () => {
		history.push('/reset-password');
	};

	const onKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
		if (e.key === 'Enter') {
			handleNavigateSignUp();
		}
	};

	useEffect(() => {
		if (!isLoading && clientSuccess) {
			if (data?.data) {
				openSnackbar('이메일을 보냈습니다.');
				postSignup.mutate({ email, password: sha256(password) });
			} else {
				setEmailHelperText(data?.message ?? '이미 존재하는 이메일입니다.');
			}
			setClientSuccess(false);
			setEmailValidationEnabled(false);
		}
	}, [clientSuccess, data, email, password]);

	return (
		<>
			<Box className="signup-first-step-con">
				<img src={logoDefaultBlue} alt="로고" className="signup-first-step-logo" />{' '}
				<Box className="signup-first-step-text">중앙대 이메일로 간편하게 가입해보세요:)</Box>
				<Box className="signup-first-step-align-self-stretch">
					<CommonTextField
						className="mt3_5rem"
						value={email}
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
						label="포탈 이메일"
						placeholder="포탈 이메일을 입력해주세요."
					/>
					<CommonTextField
						className="mt_5rem"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type={passwordHelperText ? 'error' : 'default'}
						textFieldProps={{
							type: 'password',
							onFocus: () => {
								setPasswordHelperText('');
							},
							onKeyPress,
						}}
						helperText={passwordHelperText}
						label="비밀번호"
						placeholder="사용하실 비밀번호를 입력해주세요."
					/>
					<CommonButton
						className="mt1_5rem"
						type={ButtonTypeEnum.primary}
						title="가입하기"
						onClick={handleNavigateSignUp}
						disabled={!email || !password}
					/>
					<CommonButton
						className="signup-first-step-reset-pw-btn mt_75rem"
						title="비밀번호를 잊어버리셨나요?"
						onClick={handleNavigateResetPw}
					/>
				</Box>
			</Box>
			<a href={config.privacyPolicy} className="reset-pw-privacy-policy">
				개인정보처리방침
			</a>
		</>
	);
};

export default SignUpFirstStep;
