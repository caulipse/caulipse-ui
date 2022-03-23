import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { IoChevronForward } from 'react-icons/io5';
import './index.scss';

interface IMainButtonProps {
	isDesktop?: boolean;
}

const MainButton = ({ isDesktop = false }: IMainButtonProps) => {
	const onClick = () => {
		// TODO
		// 스터디 모집 페이지 이동
	};
	return isDesktop ? (
		<Container className="desktop-main-button" onClick={onClick}>
			<Container className="main-button-container">
				<Typography className="desktop-main-button-text">스터디를 모집해 보세요!</Typography>
				<Typography className="desktop-main-button-title">스터디 모집하기</Typography>
			</Container>
			<IoChevronForward size={24} />
		</Container>
	) : (
		<Container className="mobile-main-button" onClick={onClick}>
			<Container className="main-button-container">
				<Typography className="mobile-main-button-title">스터디 모집하기</Typography>
				<Typography className="mobile-main-button-text">지금 바로 중앙대에서 스터디원을 모집해보세요!</Typography>
			</Container>
			<IoChevronForward />
		</Container>
	);
};

export default MainButton;