import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import './notificationModal.scss';

const NotificationModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	return (
		<BottomSheet open={open} onDismiss={() => onClose(false)} className="modal-bottom-sheet">
			<div>알림</div>
		</BottomSheet>
	);
};

export default NotificationModal;
