import React from 'react';
import { Button, Container } from '@material-ui/core';
import '@common/modal/common.scss';
import { IModalContainerCommonProps } from '@common/modal/types';
import SimpleModal from '@common/modal/SimpleModal';

interface IUserStudyMoreModalPresenterProps extends IModalContainerCommonProps {
	onClickCancel: () => void;
	onClickReport: () => void;
}

const UserStudyMoreModalPresenter = ({
	open,
	onClose,
	onClickCancel,
	onClickReport,
}: IUserStudyMoreModalPresenterProps): JSX.Element => {
	return (
		<SimpleModal open={open} onClose={onClose} height="12.5rem">
			<Container className="simple-modal-content-container">
				<Button className="simple-modal-button secondary" onClick={onClickCancel}>
					신청 취소
				</Button>
				<Button className="simple-modal-button primary" onClick={onClickReport}>
					신고하기
				</Button>
			</Container>
		</SimpleModal>
	);
};

export default UserStudyMoreModalPresenter;
