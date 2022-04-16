import { Box, Typography } from '@material-ui/core';
import SignUpFirstStep from '@src/app/signup/signUpFirstStep';
import SignUpSecondStep from '@src/app/signup/signUpSecondStep';
import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import './index.scss';

const SignUpPage = (): JSX.Element => {
	const history = useHistory();

	const [step, setStep] = useState<number>(1);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<Box className="sign-up-con">
			<Box className="sign-up-header-con">
				<IoArrowBack className="sign-up-icon" color="#ffffff" onClick={() => history.goBack()} />
				<Typography className="sign-up-header-title">회원가입</Typography>
				<Box className="sign-up-icon" />
			</Box>
			{step === 1 ? (
				<SignUpFirstStep
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					goToNextStep={() => setStep(2)}
				/>
			) : (
				<SignUpSecondStep />
			)}
		</Box>
	);
};

export default SignUpPage;
