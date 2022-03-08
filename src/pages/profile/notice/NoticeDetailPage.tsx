import NoticeDetailContainer from '@src/app/profile/my/notice/NoticeDetailContainer';
import React from 'react';
import { useParams } from 'react-router-dom';

const NoticeDetailPage = (): JSX.Element => {
	const { noticeId } = useParams<{ noticeId: string }>();

	return (
		<div>
			<NoticeDetailContainer noticeId={noticeId} />
		</div>
	);
};

export default NoticeDetailPage;
