import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { IoChevronForward } from 'react-icons/io5';
import './index.scss';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@src/components/common/modal/enum';
import { useAtom } from 'jotai';
import globalState from '@src/state';
import { useHistory } from 'react-router-dom';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';

interface IMainButtonProps {
	isDesktop?: boolean;
}

const MainButton = ({ isDesktop = false }: IMainButtonProps) => {
	const { openModal } = useModal();
	const history = useHistory();
	const { openSnackbar } = useSnackbar();
	const [state] = useAtom(globalState);
	const onClick = () => {
		if (!state.login) {
			openModal(ModalKeyEnum.LoginModal, { history, openSnackbar });
			return;
		}
		openModal(ModalKeyEnum.StudyPostModal);
	};
	return isDesktop ? (
		<Container className="desktop-main-button" onClick={onClick}>
			<Container className="main-button-container">
				<Typography className="desktop-main-button-text">지금 바로 스터디</Typography>
				<Typography className="desktop-main-button-title">스터디 모집하기</Typography>
			</Container>
			<IoChevronForward size={24} />
		</Container>
	) : (
		<Container className="mobile-main-button" onClick={onClick}>
			<Container className="main-button-container">
				<Typography className="mobile-main-button-title">중대본 시작하기</Typography>
				<Typography className="mobile-main-button-text">편하고 빠르게 스터디를 시작해보세요!</Typography>
			</Container>
			<IoChevronForward />
		</Container>
	);
};

export default MainButton;
