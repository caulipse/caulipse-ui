import React, { useMemo } from 'react';
import { Button, Container } from '@material-ui/core';
import '@common/modal/common.scss';
import { IModalContainerCommonProps } from '@common/modal/types';
import SimpleModal from '@common/modal/SimpleModal';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@common/modal/enum';
import { useAtom } from 'jotai';
import { modalState, userState as globalUserState } from '@src/state';
import useFetchStudyParticipants from '@src/hooks/remotes/studyUser/useFetchStudyParticipants';

const UserStudyMoreModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const { openModal } = useModal();
	const [state] = useAtom(modalState);
	const [userState] = useAtom(globalUserState);

	const { data: studyParticipantsData } = useFetchStudyParticipants(state.params);

	const isAppliedUser = useMemo(() => {
		return !!studyParticipantsData?.find((participantItem) => participantItem.userId === userState.userId);
	}, [studyParticipantsData, userState]);

	const onClickReport = () => {
		onClose(false);
		openModal(ModalKeyEnum.ReportModal, state.params);
	};
	const onClickCancel = () => {
		onClose(false);
		openModal(ModalKeyEnum.ApplyCancelModal, state.params);
	};
	return (
		<SimpleModal open={open} onClose={onClose} height="12.5rem">
			<Container className="simple-modal-content-container">
				{isAppliedUser && (
					<Button className="simple-modal-button secondary" onClick={onClickCancel}>
						신청 취소
					</Button>
				)}
				<Button className="simple-modal-button primary" onClick={onClickReport}>
					신고하기
				</Button>
			</Container>
		</SimpleModal>
	);
};

export default UserStudyMoreModal;
