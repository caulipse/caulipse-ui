import { Box } from '@material-ui/core';
import Loader from '@src/components/common/loader/Loader';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import useFetchNotifications from '@src/hooks/remotes/notification/useFetchNotifications';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import React, { useCallback, useMemo } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import './notificationModal.scss';

const NotificationModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const { width } = useWindowDimensions();
	const { data, isLoading } = useFetchNotifications();
	console.log('data, ', data);

	const isDesktop = useMemo(() => {
		return width > 1024;
	}, [width]);

	const renderNotifications = useCallback(() => {
		if (isLoading) return <Loader />;
		if (data?.length === 0) {
			return <Box className="notification-modal-empty-text">알림이 없습니다.</Box>;
		}
		return <Box>알림</Box>;
	}, [isLoading, data]);

	return isDesktop ? (
		<>
			<Box className="notification-modal-desktop-container speech-bubble-triangle">{renderNotifications()}</Box>
			<Box className="speech-bubble-bg" onClick={() => onClose(false)} />
		</>
	) : (
		<BottomSheet open={open} onDismiss={() => onClose(false)}>
			{renderNotifications()}
		</BottomSheet>
	);
};

export default NotificationModal;
