import React from 'react';
import './index.scss';
import { Button, Container } from '@material-ui/core';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';

interface IHostStudyMoreModalPresenterProps extends IModalContainerCommonProps {
	onClickChange: () => void;
	onClickDelete: () => void;
}

const HostStudyMoreModalPresenter = ({
	open,
	onClose,
	onClickChange,
	onClickDelete,
}: IHostStudyMoreModalPresenterProps): JSX.Element => {
	return (
		<SimpleModal open={open} onClose={onClose} height="14rem">
			<Container className="host-study-more-modal-container">
				<Button className="host-study-more-modal-button host-study-more-modal-button-secondary" onClick={onClickChange}>
					모집글 수정
				</Button>
				<Button className="host-study-more-modal-button host-study-more-modal-button-primary" onClick={onClickDelete}>
					모집글 삭제
				</Button>
			</Container>
		</SimpleModal>
	);
};

export default HostStudyMoreModalPresenter;
