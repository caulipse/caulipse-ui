import React from 'react';
import { Button, Container } from '@material-ui/core';
import '@common/modal/common.scss';
import { IModalContainerCommonProps } from '@common/modal/types';
import SimpleModal from '@common/modal/SimpleModal';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@common/modal/enum';
import { useAtom } from 'jotai';
import globalState from '@src/state';

const UserStudyMoreModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const { openModal } = useModal();
	const [state] = useAtom(globalState);
	const { modal } = state;

	// TODO
	// api 로 신청자 여부를 확인하여 신청자가 아닐 경우 "신청취소" 버튼은 숨김 처리해야함.
	const onClickReport = () => {
		onClose(false);
		openModal(ModalKeyEnum.ReportModal, modal.params);
	};
	const onClickCancel = () => {
		onClose(false);
		openModal(ModalKeyEnum.ApplyCancelModal);
	};
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

export default UserStudyMoreModal;
