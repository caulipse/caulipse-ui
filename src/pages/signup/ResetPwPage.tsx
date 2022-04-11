import { Box, Button, Typography } from '@material-ui/core';
import { validateEmail } from '@src/app/shared/utils/validation';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import React, { KeyboardEvent, useCallback, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import './index.scss';

const ResetPwPage = (): JSX.Element => {
	const [email, setEmail] = useState<string>('');
	const [emailHelperText, setEmailHelperText] = useState<string>('');

	const handleNavigatePrivacyPolicy = () => {
		// TODO: 개인정보처리방침 이동
	};

	const handleChangePw = useCallback(() => {
		if (!email) {
			setEmailHelperText('이메일을 입력해 주세요.');
		} else if (!validateEmail(email)) {
			setEmailHelperText('이메일 형식이 잘못되었습니다.');
		}
		// TODO: 변경 이메일 발송 로직
	}, [email]);

	const onKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
		if (e.key === 'Enter') {
			handleChangePw();
		}
	};

	return (
		<Box className="reset-pw-con">
			<Box className="reset-pw-header-con">
				<IoArrowBack className="reset-pw-icon" color="#fff" />
				<Typography>로고</Typography>
				<Box className="reset-pw-icon" />
			</Box>
			<Box className="reset-pw-body-align-self">
				<Box className="reset-pw-body-con">
					<Box className="reset-pw-body-title">암호 재설정</Box>
					<Box className="reset-pw-body-subtitle">이메일 인증을 통해 암호를 재설정 할 수 있어요.</Box>
					<CommonTextField
						className="reset-pw-body-input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type={emailHelperText ? 'error' : 'default'}
						textFieldProps={{
							type: 'email',
							variant: 'outlined',
							onFocus: () => {
								setEmailHelperText('');
							},
							onKeyPress,
						}}
						helperText={emailHelperText}
						placeholder="포탈 이메일"
					/>
					<CommonButton
						title="변경 이메일 발송"
						type={ButtonTypeEnum.primary}
						onClick={handleChangePw}
						className="mt4rem"
						disabled={!email}
					/>
				</Box>
			</Box>

			<Button variant="text" onClick={handleNavigatePrivacyPolicy} className="reset-pw-privacy-policy">
				개인정보처리방침
			</Button>
		</Box>
	);
};

export default ResetPwPage;
