import { Notice } from '@src/api/types';
import { format } from 'date-fns';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

interface NoticeItemProps {
	noticeItem: Notice;
}

const NoticeItem = ({ noticeItem }: NoticeItemProps): JSX.Element => {
	const history = useHistory();

	return (
		<button
			type="button"
			className="notice-item-container"
			onClick={() => history.push(`/profile/notice/${noticeItem.id}`)}
		>
			<div className="notice-item-title">{noticeItem.title}</div>
			<div className="notice-item-content">{noticeItem.about}</div>
			<div className="notice-item-created-at">{format(new Date(noticeItem.createdAt), 'yyyy-MM-dd')}</div>
		</button>
	);
};

export default NoticeItem;
