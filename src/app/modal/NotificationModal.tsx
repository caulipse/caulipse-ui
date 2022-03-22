import { Box, List } from '@material-ui/core';
import Loader from '@src/components/common/loader/Loader';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import useFetchNotifications from '@src/hooks/remotes/notification/useFetchNotifications';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import React, { useCallback, useMemo } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import NotificationItem from '../notification/NotificationItem';
import './notificationModal.scss';

const NotificationModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const { width } = useWindowDimensions();
	const { data, isLoading } = useFetchNotifications();

	const isDesktop = useMemo(() => {
		return width > 1024;
	}, [width]);

	const renderNotifications = useCallback(() => {
		if (isLoading) return <Loader />;
		if (data?.length === 0) {
			return <Box className="notification-modal-empty-text">알림이 없습니다.</Box>;
		}
		return data ? (
			<List className="notification-modal-list">
				{data.map((item, index, { length }) => {
					return (
						<NotificationItem
							key={item.Notification_ID}
							item={item}
							isLastItem={index === length - 1}
							closeModal={() => onClose(false)}
						/>
					);
				})}
			</List>
		) : (
			<div />
		);
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
