import { Notice } from '@src/api/types';
import { format } from 'date-fns';
import React from 'react';
import './styles.scss';

interface NoticeDetailPresenterProps {
	notice: Notice;
}

const NoticeDetailPresenter = ({ notice }: NoticeDetailPresenterProps): JSX.Element => {
	return (
		<div className="notice-detail-container">
			<div className="notice-detail-content-container">
				<div className="notice-detail-created-at">{format(new Date(notice.createdAt), 'yyyy-MM-dd')}</div>
				<div className="notice-detail-title">{notice.title}</div>
				<div className="notice-detail-content">{notice.about}</div>
			</div>
		</div>
	);
};

export default NoticeDetailPresenter;
