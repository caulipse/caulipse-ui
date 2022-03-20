import React from 'react';
import { Container } from '@material-ui/core';
import DesktopMainBanner from './banner/DesktopMainBanner';
import DesktopMainPageStudyList from './list/DesktopMainPageStudyList';
import DesktopMainSidebar from './sidebar/DesktopMainSidebar';
import './index.scss';

const DesktopMainPage = (): JSX.Element => {
	return (
		<Container className="desktop-main-page">
			<DesktopMainBanner />
			<Container className="desktop-main-page-container">
				<DesktopMainPageStudyList />
				<DesktopMainSidebar />
			</Container>
		</Container>
	);
};

export default DesktopMainPage;
