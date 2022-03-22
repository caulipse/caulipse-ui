import { Box, ListItem } from '@material-ui/core';
import { Notification } from '@src/api/types';
import { format } from 'date-fns';
import React from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import './notificationItem.scss';

interface NotificationItemProps {
	item: Notification;
	isLastItem: boolean;
}

const NotificationItem = ({ item, isLastItem }: NotificationItemProps): JSX.Element => {
	const handleClose = (event: any) => {
		event.preventDefault();
	};

	return (
		<ListItem divider={!isLastItem} button className="notification-item-con">
			<Box className="notification-item-row-con">
				<Box className="notification-item-title">{item.Notification_TITLE}</Box>
				<IoCloseCircle className="notification-item-close-icon" color="#e2e2e2" onClick={handleClose} />
			</Box>
			<Box className="notification-item-subtitle">{item.Notification_TYPE}</Box>
			<Box className="notification-item-text">{item.Notification_NOTI_ABOUT}</Box>
			<Box className="notification-item-date">{format(new Date(item.Notification_CREATED_AT), 'yy-MM-dd')}</Box>
		</ListItem>
	);
};

export default NotificationItem;
