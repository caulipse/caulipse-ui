import { NoticeInterface } from '@src/store/modules/user';
import React from 'react';
import NoticeDetailPresenter from './NoticeDetailPresenter';

const notice: NoticeInterface = {
	noticeId: '1',
	title: '제목입니다',
	content: '124314531251425412564126142612461246',
	createdAt: new Date(),
};

const NoticeDetailContainer = (): JSX.Element => {
	return <NoticeDetailPresenter notice={notice} />;
};

export default NoticeDetailContainer;
