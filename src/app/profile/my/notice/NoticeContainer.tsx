import React, { useEffect } from 'react';
import useFetchNotices from '@src/hooks/remotes/notice/useFetchNotices';
import Loader from '@src/components/common/loader/Loader';
import NoticePresenter from './NoticePresenter';

const NoticeContainer = (): JSX.Element => {
	const data = useFetchNotices();

	if (data.isLoading) return <Loader />;
	return data.data ? <NoticePresenter notices={data.data} /> : <div />;
};

export default NoticeContainer;
