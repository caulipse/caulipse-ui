import React, { useMemo } from 'react';
import { Button, Container } from '@material-ui/core';
import '@common/modal/common.scss';
import { IModalContainerCommonProps } from '@common/modal/types';
import SimpleModal from '@common/modal/SimpleModal';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@common/modal/enum';
import { useAtom } from 'jotai';
import globalState, { modalState as globalModalState, userState as globalUserState } from '@src/state';
import useFetchStudyParticipants from '@src/hooks/remotes/studyUser/useFetchStudyParticipants';
import useFetchStudy from '@src/hooks/remotes/study/useFetchStudy';

const UserStudyMoreModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const { openModal } = useModal();
	const [modalState] = useAtom(globalModalState);
	const [userState] = useAtom(globalUserState);
	const [state] = useAtom(globalState);

	const { data: studyParticipantsData } = useFetchStudyParticipants(modalState.params);
	const { data: studyData } = useFetchStudy(modalState?.params, state.login);

	const isAppliedUser = useMemo(() => {
		return !!studyParticipantsData?.find((participantItem) => participantItem.userId === userState.userId);
	}, [studyParticipantsData, userState]);

	const onClickReport = () => {
		onClose(false);
		openModal(ModalKeyEnum.ReportModal, modalState.params);
	};
	const onClickCancel = () => {
		onClose(false);
		openModal(ModalKeyEnum.ApplyCancelModal, modalState.params);
	};
	return (
		<SimpleModal open={open} onClose={onClose} height="12.5rem">
			<Container className="simple-modal-content-container">
				{(isAppliedUser || studyData?.applied) && (
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
