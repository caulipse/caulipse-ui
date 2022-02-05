import { NoticeInterface } from '@src/store/modules/user';
import React from 'react';

interface NoticePresenterProps {
	notices: NoticeInterface[];
}

const NoticePresenter = ({ notices }: NoticePresenterProps): JSX.Element => {
	console.log('notices, ', notices);
	return <div>NoticePresenter</div>;
};

export default NoticePresenter;
