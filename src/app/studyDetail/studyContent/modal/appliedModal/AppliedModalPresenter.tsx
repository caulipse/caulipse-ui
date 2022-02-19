import React from 'react';
import './index.scss';
import { Button, Container } from '@material-ui/core';
import Modal from '@common/modal/Modal';
import { IModalContainerCommonProps } from '@common/modal/types';
import '@common/modal/common.scss';

const AppliedModalPresenter = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	return (
		<Modal open={open} onClose={onClose} height="15rem">
			<Container className="modal-root-container apply-modal-container modal-space-between-container">
				<Container>
					<Container className="modal-title-container">
						<span>신청 완료!</span>
					</Container>
					<Container className="applied-modal-helper-text-container">
						<span>신청결과와 마감여부를 알림으로 알려드릴게요 :)</span>
					</Container>
				</Container>
				<Container>
					<Button className="simple-modal-rounded-button primary" onClick={() => onClose(false)}>
						확인
					</Button>
				</Container>
			</Container>
		</Modal>
	);
};

export default AppliedModalPresenter;
