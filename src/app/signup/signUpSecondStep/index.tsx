import { Box } from '@material-ui/core';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import React from 'react';
import './index.scss';

interface SignUpSecondStepProps {
	nickname: string;
	dept: string;
	grade: number;
	onBreak: boolean;
	setNickName: React.Dispatch<React.SetStateAction<string>>;
	setDept: React.Dispatch<React.SetStateAction<string>>;
	setGrade: React.Dispatch<React.SetStateAction<number>>;
	setOnBreak: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpSecondStep = ({
	nickname,
	dept,
	grade,
	onBreak,
	setNickName,
	setDept,
	setGrade,
	setOnBreak,
}: SignUpSecondStepProps): JSX.Element => {
	return (
		<Box className="signup-second-step-con">
			<Box className="signup-second-step-title">📚중앙인의 스터디, 중대본!</Box>
			<CommonTextField
				className="mt2_5rem"
				placeholder="닉네임은 5~7자입니다."
				label="닉네임"
				value={nickname}
				onChange={(e) => setNickName(e.target.value)}
			/>
			<CommonTextField
				className="mt1_5rem"
				placeholder="어떤 단과대에서 공부중이신가요?"
				label="단과대"
				value={dept}
				onChange={(e) => setDept(e.target.value)}
				// type={isMajorError ? 'error' : 'default'}
				// helperText="최소 2글자입니다."
			/>
			<Box className="profile-edit-row-container mt1_5rem">
				<CommonTextField
					className="profile-edit-grade-select mt0rem"
					value={grade}
					onChange={(e) => setGrade(Number(e.target.value))}
					label="학년"
					textFieldProps={{ select: true, SelectProps: { native: true } }}
				>
					<option value={1}>1학년</option>
					<option value={2}>2학년</option>
					<option value={3}>3학년</option>
					<option value={4}>4학년</option>
				</CommonTextField>
				<CommonTextField
					className="profile-edit-status-select mt0rem"
					value={Number(onBreak)}
					onChange={(e) => setOnBreak(Boolean(e.target.value))}
					label="재학상태"
					textFieldProps={{ select: true, SelectProps: { native: true } }}
				>
					<option value={0}>재학중</option>
					<option value={1}>휴학중</option>
				</CommonTextField>
			</Box>
		</Box>
	);
};

export default SignUpSecondStep;
