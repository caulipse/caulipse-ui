import { Box, Typography } from '@material-ui/core';
import SignUpFirstStep from '@src/app/signup/signUpFirstStep';
import SignUpSecondStep from '@src/app/signup/signUpSecondStep';
import React, { useEffect, useState } from 'react';
import QueryString from 'qs';
import { IoArrowBack } from 'react-icons/io5';
import { useHistory, useLocation } from 'react-router-dom';
import './index.scss';
import usePostUserProfile from '@src/hooks/remotes/user/usePostUserProfile';

const SignUpPage = (): JSX.Element => {
	const history = useHistory();
	const location = useLocation();
	const id = QueryString.parse(location?.search, { ignoreQueryPrefix: true })?.id;

	const postUserProfile = usePostUserProfile();

	const [step, setStep] = useState<number>(1);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [nickname, setNickName] = useState<string>('');
	const [dept, setDept] = useState<string>('');
	const [grade, setGrade] = useState<number>(1);
	const [onBreak, setOnBreak] = useState<boolean>(false);

	const handleSignUpComplete = () => {
		/// TODO: 가입 완료 로직
		if (id) {
			postUserProfile
				.mutateAsync({ userId: String(id), userName: nickname, dept, grade: String(grade), onBreak })
				.then((result) => {
					console.log('result, ', result);
				});
		}
	};

	useEffect(() => {
		if (id) {
			setStep(2);
		}
	}, [id]);

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
				<SignUpSecondStep
					nickname={nickname}
					dept={dept}
					grade={grade}
					onBreak={onBreak}
					setNickName={setNickName}
					setGrade={setGrade}
					setDept={setDept}
					setOnBreak={setOnBreak}
					handleSignUpComplete={handleSignUpComplete}
				/>
			)}
		</Box>
	);
};

export default SignUpPage;
