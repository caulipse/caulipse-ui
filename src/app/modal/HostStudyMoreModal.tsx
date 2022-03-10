import React from 'react';
import { Button, Container } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';

const HostStudyMoreModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const onClickChange = () => {
		// TODO
		// 모집글 변경 Flow 연결
	};

	const onClickDelete = () => {
		onClose(false);
		// TODO
		// studyDeleteModl
		// setOpenStudyDeleteModal(true);
	};
	return (
		<SimpleModal open={open} onClose={onClose} height="14rem">
			<Container className="simple-modal-content-container">
				<Button className="simple-modal-button primary" onClick={onClickChange}>
					모집글 수정
				</Button>
				<Button className="simple-modal-button secondary" onClick={onClickDelete}>
					모집글 삭제
				</Button>
			</Container>
		</SimpleModal>
	);
};

export default HostStudyMoreModal;
