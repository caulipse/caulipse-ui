import React, { useEffect } from 'react';
import * as Factory from 'factory.ts';
import NoticePresenter from './NoticePresenter';
import { NoticeInterface } from '../../interface/interface';

const NoticeContainer = (): JSX.Element => {

	const getNotices = (iter: number) => {
		const appliedStudiesFactory = Factory.Sync.makeFactory<NoticeInterface>({
			noticeId: Factory.each((i) => i.toString()),
			title: '제목입니다.',
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			createdAt: new Date(),
		});
		return appliedStudiesFactory.buildList(iter);
	};

	return <NoticePresenter notices={getNotices(5)} />;
};

export default NoticeContainer;
