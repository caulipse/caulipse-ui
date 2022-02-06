import { NoticeInterface } from '@src/store/modules/user';
import moment from 'moment';
import React from 'react';
import './styles.scss';

interface NoticeItemProps {
	noticeItem: NoticeInterface;
}

const NoticeItem = ({ noticeItem }: NoticeItemProps): JSX.Element => {
	return (
		<button type="button" className="notice-item-container">
			<div className="notice-item-title">{noticeItem.title}</div>
			<div className="notice-item-content">{noticeItem.content}</div>
			<div className="notice-item-created-at">{moment(noticeItem.createdAt).format('YY-MM-DD')}</div>
		</button>
	);
};

export default NoticeItem;
