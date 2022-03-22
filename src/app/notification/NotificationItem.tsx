import { Box, ListItem } from '@material-ui/core';
import { Notification } from '@src/api/types';
import { NOTIFICATION_TYPE } from '@src/const';
import useDeleteNotification from '@src/hooks/remotes/notification/useDeleteNotification';
import { format } from 'date-fns';
import React from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import './notificationItem.scss';

interface NotificationItemProps {
	item: Notification;
	isLastItem: boolean;
	closeModal: () => void;
}

const NotificationItem = ({ item, isLastItem, closeModal }: NotificationItemProps): JSX.Element => {
	const deleteNotification = useDeleteNotification(item.Notification_ID);
	const history = useHistory();

	const handleClose = (event: any) => {
		event.preventDefault();
		deleteNotification.mutate();
	};

	const handleClick = () => {
		closeModal();
		switch (item.Notification_TYPE) {
			case NOTIFICATION_TYPE.NEW_APPLICANT:
			case NOTIFICATION_TYPE.CANCEL_APPLY:
			case NOTIFICATION_TYPE.ACCEPT:
				history.push({
					pathname: `/study/detail/${item.Notification_STUDY_ID}`,
					state: { initialIndex: 2 },
				});
				break;
			case NOTIFICATION_TYPE.NEW_COMMENT:
			case NOTIFICATION_TYPE.NEW_COMMENT_METOO:
				history.push({
					pathname: `/study/detail/${item.Notification_STUDY_ID}`,
					state: { initialIndex: 3 },
				});
				break;
			case NOTIFICATION_TYPE.STUDY_FINISH:
			case NOTIFICATION_TYPE.EDIT_STUDY:
				history.push({
					pathname: `/study/detail/${item.Notification_STUDY_ID}`,
					state: { initialIndex: 1 },
				});
				break;
			case NOTIFICATION_TYPE.NEW_NOTICE:
				history.push({
					pathname: `/profile/notice/${item.Notification_NOTICE_ID}`,
				});
				break;
			default:
				break;
		}
	};

	return (
		<ListItem divider={!isLastItem} button className="notification-item-con" onClick={handleClick}>
			<Box className="notification-item-row-con">
				<Box className="notification-item-title">{item.Notification_TITLE}</Box>
				<IoCloseCircle className="notification-item-close-icon" color="#e2e2e2" onClick={handleClose} />
			</Box>
			<Box className="notification-item-subtitle">{item.Notification_TITLE}</Box>
			<Box className="notification-item-text">{item.Notification_NOTI_ABOUT}</Box>
			<Box className="notification-item-date">{format(new Date(item.Notification_CREATED_AT), 'yy-MM-dd')}</Box>
		</ListItem>
	);
};

export default NotificationItem;
