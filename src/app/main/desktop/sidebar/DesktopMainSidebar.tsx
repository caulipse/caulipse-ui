import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { IoChevronForward } from 'react-icons/io5';
import MainButton from '@src/app/main/button/MainButton';
import './index.scss';

const DesktopMainSidebar = (): JSX.Element => {
	return (
		<Container className="desktop-main-sidebar">
			<MainButton isDesktop />
			<Container className="desktop-main-sidebar-container">
				<a href="https://eclass3.cau.ac.kr/">
					<Container className="desktop-main-sidebar-item-container">
						<Container>
							<Typography className="desktop-main-sidebar-item-container-text">이클래스 바로가기</Typography>
							<Typography className="desktop-main-sidebar-item-container-title">중앙대 이클래스</Typography>
						</Container>
						<IoChevronForward />
					</Container>
				</a>
				<hr className="desktop-main-sidebar-item-divider" />
				<Container className="desktop-main-sidebar-item-container">
					<Container>
						<Typography className="desktop-main-sidebar-item-container-text">안녕하세요 중대본입니다 :)</Typography>
						<Typography className="desktop-main-sidebar-item-container-title">중대본 알아보기</Typography>
					</Container>
					<IoChevronForward />
				</Container>
			</Container>
		</Container>
	);
};

export default DesktopMainSidebar;
