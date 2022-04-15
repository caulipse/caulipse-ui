import { Box, Typography } from '@material-ui/core';
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

	const onKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
		if (e.key === 'Enter') {
			// handleChangePw();
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
			</Box>
		</Box>
	);
};

export default SignUpPage;
