import React from 'react';
import './index.scss';
import { Button, Container } from '@material-ui/core';
import SimpleModal from '@common/modal/SimpleModal';

interface IUserStudyMoreModalPresenterProps {
	open: boolean;
	onClose: (param: boolean) => void;
	onClick: () => void;
}

const UserStudyMoreModalPresenter = ({ open, onClose, onClick }: IUserStudyMoreModalPresenterProps): JSX.Element => {
	return (
		<SimpleModal open={open} onClose={onClose} height="10.5rem">
			<Container className="user-study-more-modal-container">
				<Button className="user-study-more-modal-button" onClick={onClick}>
					신고하기
				</Button>
			</Container>
		</SimpleModal>
	);
};

export default UserStudyMoreModalPresenter;
