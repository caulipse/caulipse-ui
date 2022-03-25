import Loader from '@src/components/common/loader/Loader';
import useFetchNotice from '@src/hooks/remotes/notice/useFetchNotice';
import React from 'react';
import NoticeDetailPresenter from './NoticeDetailPresenter';

interface NoticeDetailContainerProps {
	noticeId: string;
}

const NoticeDetailContainer = ({ noticeId }: NoticeDetailContainerProps): JSX.Element => {
	const { data, isLoading } = useFetchNotice(noticeId);

	if (isLoading) return <Loader />;

	return data?.notice ? <NoticeDetailPresenter notice={data.notice} /> : <div />;
};

export default NoticeDetailContainer;
