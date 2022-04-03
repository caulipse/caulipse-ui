import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React from 'react';
import './studyPostModal.scss';

const StudyPostModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<>studymodal</>
		</Modal>
	);
};

export default StudyPostModal;
