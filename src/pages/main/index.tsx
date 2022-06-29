/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import { Box, Container } from '@material-ui/core';
import MobileMainPage from '@src/app/main/mobile/MobileMainPage';
import DesktopMainPage from '@src/app/main/desktop/DesktopMainPage';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import './index.scss';
import { useParams, useHistory } from 'react-router-dom';
import Modal from '@src/components/common/modal/Modal';
import girlWithLongHair from '@src/assets/img/illustration/girlWithLongHair.svg';
import CommonButton from '@src/components/common/button/CommonButton';
import BookWithTwoGirls from '@src/assets/img/illustration/bookWithTwoGirls.svg';

const MainPage = (): JSX.Element => {
	const history = useHistory();

	const signUpContent = {
		1: {
			img: girlWithLongHair,
			text: '회원가입을 축하합니다!',
			subtext: '보람찬 스터디 활동을 응원합니다 :)',
			btnText: '다음',
			onClick: () => {
				setStep(2);
			},
		},
		2: {
			img: BookWithTwoGirls,
			text: '내 프로필 완성하기',
			subtext: '관심사, 한줄 소개글을 통해 자신을 표현해 보세요!',
			btnText: '지금 바로 작성하기',
			onClick: () => {
				setOpen(false);
				history.replace('/profile/edit');
			},
		},
	};

	const { width } = useWindowDimensions();
	const desktop = width > 1024;
	const { initial = 'false' } = useParams<{ initial?: 'true' | 'false' }>();

	const [step, setStep] = useState<1 | 2>(1);
	const [open, setOpen] = useState<boolean>(initial === 'true');

	return (
		<>
			<Container className="main-page-container">{desktop ? <DesktopMainPage /> : <MobileMainPage />}</Container>
			{open && (
				<Modal open onClose={() => {}}>
					<Box className="sign-up-modal-con">
						<img src={signUpContent[step].img} className="sign-up-modal-img" alt="회원가입 이미지" />
						<Box className="sign-up-modal-text">{signUpContent[step].text}</Box>
						<Box className="sign-up-modal-subtext">{signUpContent[step].subtext}</Box>
						<CommonButton
							onClick={signUpContent[step].onClick}
							title={signUpContent[step].btnText}
							className="sign-up-modal-cta"
						/>
					</Box>
				</Modal>
			)}
		</>
	);
};

export default MainPage;
