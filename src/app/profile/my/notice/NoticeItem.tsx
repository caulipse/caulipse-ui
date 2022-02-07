import { NoticeInterface } from '@src/store/modules/user';
import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

interface NoticeItemProps {
	noticeItem: NoticeInterface;
}

const NoticeItem = ({ noticeItem }: NoticeItemProps): JSX.Element => {
	const history = useHistory();

	return (
		<button type="button" className="notice-item-container" onClick={()=>history.push(`/profile/notice/${noticeItem.noticeId}`)}>
			<div className="notice-item-title">{noticeItem.title}</div>
			<div className="notice-item-content">{noticeItem.content}</div>
			<div className="notice-item-created-at">{moment(noticeItem.createdAt).format('YY-MM-DD')}</div>
		</button>
	);
};

export default NoticeItem;
