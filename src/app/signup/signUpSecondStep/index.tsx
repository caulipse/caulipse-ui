import { Box } from '@material-ui/core';
import { validateNickname } from '@src/app/shared/utils/validation';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import useFetchNicknameDuplicate from '@src/hooks/remotes/user/useFetchNicknameDuplicate';
import React, { useEffect, useState } from 'react';
import girlWithLongHair from '@src/assets/img/illustration/girlWithLongHair.svg';
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
	handleSignUpComplete: () => void;
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
	handleSignUpComplete,
}: SignUpSecondStepProps): JSX.Element => {
	const [nicknameHelperText, setNicknameHelperText] = useState<string>('');
	const [deptHelperText, setDeptHelperText] = useState<string>('');
	const [duplicateEnabled, setDuplicatedEnabled] = useState<boolean>(false);
	const [clientValidation, setClientValidation] = useState<boolean>(false);

	const { data, isLoading } = useFetchNicknameDuplicate(nickname, duplicateEnabled);

	const handleClickCTA = async () => {
		let nickNameSuccess = false;
		let deptSuccess = false;
		setDuplicatedEnabled(true);

		if (!nickname) {
			setNicknameHelperText('닉네임을 입력해 주세요.');
		} else if (!validateNickname(nickname)) {
			setNicknameHelperText('닉네임은 한글, 영문, 특수문자 (- _ .) 포함하여 2 ~ 12글자로 입력해주세요.');
		} else {
			nickNameSuccess = true;
		}

		if (!dept) {
			setDeptHelperText('단과대를 입력해 주세요.');
		} else if (dept.length < 2) {
			setDeptHelperText('최소 2글자입니다.');
		} else {
			deptSuccess = true;
		}

		setClientValidation(nickNameSuccess && deptSuccess);
	};

	useEffect(() => {
		if (!isLoading && clientValidation) {
			if (data?.data) {
				handleSignUpComplete();
			} else {
				setNicknameHelperText('이미 존재하는 닉네임이에요 :(');
			}
			setDuplicatedEnabled(false);
		}
	}, [isLoading, clientValidation, data]);

	return (
		<Box className="signup-second-step-con">
			<Box className="signup-second-step-title">📚중앙인의 스터디, 중대본!</Box>
			<CommonTextField
				className="mt2_5rem"
				placeholder="닉네임은 2~10자입니다."
				label="닉네임"
				value={nickname}
				onChange={(e) => setNickName(e.target.value)}
				type={nicknameHelperText ? 'error' : 'default'}
				helperText={nicknameHelperText}
				textFieldProps={{ onFocus: () => setNicknameHelperText('') }}
			/>
			<CommonTextField
				className="mt1_5rem"
				placeholder="어떤 단과대에서 공부중이신가요?"
				label="단과대"
				value={dept}
				onChange={(e) => setDept(e.target.value)}
				type={deptHelperText ? 'error' : 'default'}
				helperText={deptHelperText}
				textFieldProps={{ onFocus: () => setDeptHelperText('') }}
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
			<img src={girlWithLongHair} alt="" className="signup-second-step-illustration" />
			<CommonButton
				className="signup-second-step-cta-btn"
				type={ButtonTypeEnum.primary}
				title="가입완료!"
				onClick={handleClickCTA}
				disabled={!nickname || !dept}
			/>
		</Box>
	);
};

export default SignUpSecondStep;
