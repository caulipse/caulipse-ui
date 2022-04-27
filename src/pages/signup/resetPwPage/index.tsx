import { Box, Button, Typography } from '@material-ui/core';
import { validateEmail } from '@src/app/shared/utils/validation';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import React, { KeyboardEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link, useHistory, useLocation } from 'react-router-dom';
import QueryString from 'qs';
import logoDefaultWhite from '@src/assets/img/logo/logoDefaultWhite.svg';
import './index.scss';
import usePatchResetPwMail from '@src/hooks/remotes/user/usePatchResetPwMail';

const ResetPwPage = (): JSX.Element => {
	const history = useHistory();
	const patchResetPwMail = usePatchResetPwMail();
	const location = useLocation();
	const id = QueryString.parse(location?.search, { ignoreQueryPrefix: true })?.id;
	const paramEmail = QueryString.parse(location?.search, { ignoreQueryPrefix: true })?.email;
	const [email, setEmail] = useState<string>('');
	const [emailHelperText, setEmailHelperText] = useState<string>('');

	const isAfterEmailVerification = useMemo(() => {
		return id && paramEmail;
	}, [id, paramEmail]);

	const handleNavigatePrivacyPolicy = () => {
		// TODO: 개인정보처리방침 이동
	};

	const handleChangePw = useCallback(() => {
		if (!email) {
			setEmailHelperText('이메일을 입력해 주세요.');
		} else if (!validateEmail(email)) {
			setEmailHelperText('이메일 형식이 잘못되었습니다.');
		} else {
			patchResetPwMail.mutate({ email });
		}
	}, [email]);

	const onKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
		if (e.key === 'Enter') {
			handleChangePw();
		}
	};

	useEffect(() => {
		if (patchResetPwMail.isError) {
			const errorMsg = patchResetPwMail.error?.message;
			if (errorMsg.includes('400')) {
				setEmailHelperText('이메일 입력이 잘못 되었습니다.');
			} else if (errorMsg.includes('404')) {
				setEmailHelperText('가입되지 않은 이메일입니다.');
			} else {
				setEmailHelperText('에러가 발생했습니다.');
			}
		}
	}, [patchResetPwMail.isError, patchResetPwMail.error]);

	return (
		<Box className="reset-pw-con">
			<Box className="reset-pw-header-con">
				<IoArrowBack className="reset-pw-icon" color="#fff" onClick={() => history.goBack()} />
				<Link to="/">
					<img src={logoDefaultWhite} alt="로고" className="header-logo" />
				</Link>
				<Box className="reset-pw-icon" />
			</Box>
			<Box className="reset-pw-body-align-self">
				<Box className="reset-pw-body-con">
					<Box className="reset-pw-body-title">{isAfterEmailVerification ? '암호 변경' : '암호 재설정'}</Box>
					<Box className="reset-pw-body-subtitle">
						{isAfterEmailVerification
							? '양식에 맞춰 새 암호를 입력해주세요.'
							: '이메일 인증을 통해 암호를 재설정 할 수 있어요.'}
					</Box>
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
