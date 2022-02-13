import React from 'react';
import { Button, Container } from '@material-ui/core';
import '@common/modal/common.scss';
import { IModalContainerCommonProps } from '@common/modal/types';
import SimpleModal from '@common/modal/SimpleModal';

interface IUserStudyMoreModalPresenterProps extends IModalContainerCommonProps {
	onClick: () => void;
}

const UserStudyMoreModalPresenter = ({ open, onClose, onClick }: IUserStudyMoreModalPresenterProps): JSX.Element => {
	return (
		<SimpleModal open={open} onClose={onClose} height="10.5rem">
			<Container className="simple-modal-content-container">
				<Button className="simple-modal-button primary" onClick={onClick}>
					신고하기
				</Button>
			</Container>
		</SimpleModal>
	);
};

export default UserStudyMoreModalPresenter;
