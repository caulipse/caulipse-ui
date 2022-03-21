import React from 'react';
import { Container } from '@material-ui/core';
import MobileStudyPage from '@src/app/study/mobile/MobileStudyPage';
import DesktopStudyPage from '@src/app/study/desktop/DesktopStudyPage';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import './index.scss';

const MainPage = (): JSX.Element => {
	const { width } = useWindowDimensions();
	const desktop = width > 1024;

	return <Container className="study-page-container">{desktop ? <DesktopStudyPage /> : <MobileStudyPage />}</Container>;
};

export default MainPage;
