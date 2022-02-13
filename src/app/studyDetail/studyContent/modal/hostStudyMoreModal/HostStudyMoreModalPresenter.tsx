import React from 'react';
import { Button, Container } from '@material-ui/core';
import '@common/modal/common.scss';
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
			<Container className="simple-modal-content-container">
				<Button className="simple-modal-content-button primary" onClick={onClickChange}>
					모집글 수정
				</Button>
				<Button className="simple-modal-content-button secondary" onClick={onClickDelete}>
					모집글 삭제
				</Button>
			</Container>
		</SimpleModal>
	);
};

export default HostStudyMoreModalPresenter;
