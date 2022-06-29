/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import { Box, Container } from '@material-ui/core';
import MobileMainPage from '@src/app/main/mobile/MobileMainPage';
import DesktopMainPage from '@src/app/main/desktop/DesktopMainPage';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import './index.scss';
import { useParams } from 'react-router-dom';
import Modal from '@src/components/common/modal/Modal';
import girlWithLongHair from '@src/assets/img/illustration/girlWithLongHair.svg';
import CommonButton from '@src/components/common/button/CommonButton';

const MainPage = (): JSX.Element => {
	const { width } = useWindowDimensions();
	const desktop = width > 1024;

	const [step, setStep] = useState<number>(1);

	const { initial = 'false' } = useParams<{ initial?: 'true' | 'false' }>();

	return (
		<>
			<Container className="main-page-container">{desktop ? <DesktopMainPage /> : <MobileMainPage />}</Container>
			{initial !== 'true' && (
				<Modal open onClose={() => {}}>
					<Box className="sign-up-modal-con">
						<img src={girlWithLongHair} className="sign-up-modal-img" alt="회원가입 이미지" />
						<Box className="sign-up-modal-text">회원가입을 축하합니다.</Box>
						<Box className="sign-up-modal-subtext">보람찬 스터디활동을 응원합니다 :)</Box>
						<CommonButton
							onClick={() => setStep((curStep) => curStep + 1)}
							title="다음"
							className="sign-up-modal-cta"
						/>
					</Box>
				</Modal>
			)}
		</>
	);
};

export default MainPage;
