import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { IoChevronForward } from 'react-icons/io5';
import MainButton from '@src/app/main/button/MainButton';
import './index.scss';

const DesktopMainSidebar = (): JSX.Element => {
	const history = useHistory();

	const onClickEClass = () => {
		// TODO
		// 이클래스 이동
	};

	const onClickGuide = () => {
		// TODO
		// 가이드 이동
	};

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
						<Typography className="desktop-main-sidebar-item-container-text">중대본 설명서</Typography>
						<Typography className="desktop-main-sidebar-item-container-title">사용방법 보기</Typography>
					</Container>
					<IoChevronForward />
				</Container>
			</Container>
		</Container>
	);
};

export default DesktopMainSidebar;
