import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import useFetchNotices from '@src/hooks/remotes/notice/useFetchNotices';
import Loader from '@src/components/common/loader/Loader';
import useIntersectionObserver from '@src/hooks/common/useIntersectionObserver';
import { Container } from '@material-ui/core';
import { Notice } from '@src/api/types';
import NoticePresenter from './NoticePresenter';

const NoticeContainer = (): JSX.Element => {
	const limit = 15;
	const [offset, setOffset] = useState<number>(0);
	const [notices, setNotices] = useState<Notice[]>([] as Notice[]);
	const { data, isLoading } = useFetchNotices(offset, limit);

	const target = useRef<HTMLDivElement>(null);
	const isOnScreen = useIntersectionObserver(target);

	const totalPage = useMemo(() => {
		return data?.pages ?? 0;
	}, [data]);

	useEffect(() => {
		if (isOnScreen && offset + 1 < totalPage) setOffset((value) => value + 1);
	}, [isOnScreen, offset]);

	useEffect(() => {
		if (!data?.data) return;
		setNotices((arr) => [...arr, ...data.data]);
	}, [data]);

	return notices ? (
		<>
			<NoticePresenter notices={notices} />
			<Container ref={target as unknown as RefObject<HTMLDivElement> | null}>{isLoading && <Loader />}</Container>
		</>
	) : (
		<div />
	);
};

export default NoticeContainer;
