import React from 'react';
import { Button, Container } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@common/modal/enum';
import { useAtom } from 'jotai';
import globalState, { modalState as globalModalState } from '@src/state';
import useFetchStudy from '@src/hooks/remotes/study/useFetchStudy';

const HostStudyMoreModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const { openModal } = useModal();
	const [modalState] = useAtom(globalModalState);
	const [state] = useAtom(globalState);

	const { data } = useFetchStudy(modalState?.params?.studyId, state.login);

	const onClickChange = () => {
		openModal(ModalKeyEnum.EditStudyModal, { studyData: data });
	};

	const onClickDelete = () => {
		onClose(false);
		openModal(ModalKeyEnum.StudyDeleteModal, modalState?.params);
	};
	return (
		<SimpleModal open={open} onClose={onClose} height="14rem">
			<Container className="simple-modal-content-container">
				{modalState?.params?.isEditable && (
					<Button className="simple-modal-button primary" onClick={onClickChange}>
						모집글 수정
					</Button>
				)}
				<Button className="simple-modal-button secondary" onClick={onClickDelete}>
					모집글 삭제
				</Button>
			</Container>
		</SimpleModal>
	);
};

export default HostStudyMoreModal;
