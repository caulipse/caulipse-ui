import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React from 'react';

const LoginModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<>LoginModal</>
		</Modal>
	);
};

export default LoginModal;
