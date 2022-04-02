import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React from 'react';

const EditProfileImageModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	return (
		<Modal open={open} onClose={onClose}>
			<div>EditProfileModal</div>
		</Modal>
	);
};

export default EditProfileImageModal;
