import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React from 'react';

const EditStudyModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<div style={{ backgroundColor: 'red' }}>모집글 수정하기</div>
		</Modal>
	);
};

export default EditStudyModal;
