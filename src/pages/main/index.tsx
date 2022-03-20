import React from 'react';
import { Container } from '@material-ui/core';
import MobileMainPage from '@src/app/main/mobile/MobileMainPage';
import DesktopMainPage from '@src/app/main/desktop/DesktopMainPage';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import './index.scss';

const MainPage = (): JSX.Element => {
	const { width } = useWindowDimensions();
	const desktop = width > 1024;

	return <Container className="main-page-container">{desktop ? <DesktopMainPage /> : <MobileMainPage />}</Container>;
};

export default MainPage;
