import { format } from 'date-fns';
import React from 'react';
import { NoticeInterface } from '../../interface/interface';
import './styles.scss';

interface NoticeDetailPresenterProps {
	notice: NoticeInterface;
}

const NoticeDetailPresenter = ({ notice }: NoticeDetailPresenterProps): JSX.Element => {
	return (
		<div className="notice-detail-container">
			<div className="notice-detail-content-container">
				<div className="notice-detail-created-at">{format(notice.createdAt, 'yyyy-MM-dd')}</div>
				<div className="notice-detail-title">{notice.title}</div>
				<div className="notice-detail-content">{notice.content}</div>
			</div>
		</div>
	);
};

export default NoticeDetailPresenter;
