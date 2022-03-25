import React from 'react';
import useFetchNotices from '@src/hooks/remotes/notice/useFetchNotices';
import Loader from '@src/components/common/loader/Loader';
import NoticePresenter from './NoticePresenter';

const NoticeContainer = (): JSX.Element => {
	// TODO: 페이지네이션 구현하기
	const offset = 1;
	const limit = 100;
	const { data, isLoading } = useFetchNotices(offset, limit);

	if (isLoading) return <Loader />;
	return data?.data ? <NoticePresenter notices={data.data} /> : <div />;
};

export default NoticeContainer;
