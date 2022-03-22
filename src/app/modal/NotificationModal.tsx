import { Box } from '@material-ui/core';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import React, { useMemo } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import './notificationModal.scss';

const NotificationModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const { width } = useWindowDimensions();

	const isDesktop = useMemo(() => {
		return width > 1024;
	}, [width]);

	return isDesktop ? (
		<>
			<Box className="notification-modal-desktop-container speech-bubble-triangle">
				<div>알림</div>
			</Box>
			<Box className="speech-bubble-bg" onClick={() => onClose(false)} />
		</>
	) : (
		<BottomSheet open={open} onDismiss={() => onClose(false)} className="modal-bottom-sheet">
			<div>알림</div>
		</BottomSheet>
	);
};

export default NotificationModal;
