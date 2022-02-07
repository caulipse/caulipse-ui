import { NoticeInterface } from '@src/store/modules/user';
import moment from 'moment';
import React from 'react';

interface NoticeDetailPresenterProps {
	notice: NoticeInterface;
}

const NoticeDetailPresenter = ({ notice }: NoticeDetailPresenterProps): JSX.Element => {
	return (
		<div>
			<div>{notice.title}</div>
			<div>{notice.content}</div>
			<div>{moment(notice.createdAt).format('YY-MM-DD')}</div>
		</div>
	);
};

export default NoticeDetailPresenter;
