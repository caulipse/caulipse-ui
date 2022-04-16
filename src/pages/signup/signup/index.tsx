import { Box, Typography } from '@material-ui/core';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import React, { KeyboardEvent, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import './index.scss';

const SignUpPage = (): JSX.Element => {
	const history = useHistory();
	const [email, setEmail] = useState<string>('');
	const [emailHelperText, setEmailHelperText] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordHelperText, setPasswordHelperText] = useState<string>('');

	const handleSignUp = () => {
		// TODO: 가입하기
	};

	const handleResetPw = () => {
		history.push('/reset-password');
	};

	const onKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
		if (e.key === 'Enter') {
			handleSignUp();
		}
	};

	return (
		<Box className="sign-up-con">
			<Box className="sign-up-header-con">
				<IoArrowBack className="sign-up-icon" color="#ffffff" onClick={() => history.goBack()} />
				<Typography className="sign-up-header-title">회원가입</Typography>
				<Box className="sign-up-icon" />
			</Box>
			<Box className="sign-up-body-con">
				<Typography>로고</Typography>
				<Box className="sign-up-body-text">중앙대 이메일로 간편하게 가입해보세요:)</Box>
				<CommonTextField
					className="sign-up-body-align-self-stretch mt3_5rem"
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
					className="sign-up-body-align-self-stretch mt_5rem"
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
					className="sign-up-body-align-self-stretch mt1_5rem"
					type={ButtonTypeEnum.primary}
					title="가입하기"
					onClick={handleSignUp}
				/>
				<CommonButton
					className="sign-up-body-align-self-stretch sign-up-body-reset-pw-btn mt_75rem"
					title="비밀번호를 잊어버리셨나요?"
					onClick={handleResetPw}
				/>
			</Box>
		</Box>
	);
};

export default SignUpPage;
