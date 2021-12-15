import React, { useEffect } from 'react';
import * as Factory from 'factory.ts';
import { setBookmarks } from '@src/store/modules/user';
import { useAppDispatch, useAppSelector } from '@src/hooks/appRedux';
import BookmarkPresenter from './BookmarkPresenter';
import { BookmarkInterface } from '../interface/interface';

const BookmarkContainer = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const bookmarks = useAppSelector((state) => state.user.bookmarks);

	const getBookmarkData = (iter: number) => {
		const bookmarkFactory = Factory.Sync.makeFactory<BookmarkInterface>({
			studyId: Factory.each((i) => i),
			title: '제목입니다.',
			currentNumber: 1,
			maxNumber: 10,
			date: new Date(),
			hits: 5,
			stars: 5,
			category: Factory.each((i) => (i > 2 ? '어학->토익' : '프로그래밍')),
		});
		return bookmarkFactory.buildList(iter);
	};

	useEffect(() => {
		dispatch(
			setBookmarks({
				recruitingBookmarks: getBookmarkData(5),
				recruitedBookmarks: getBookmarkData(3),
			})
		);
	}, []);

	return (
		<div>
			<BookmarkPresenter
				recruitedBookmarks={bookmarks?.recruitedBookmarks}
				recruitingBookmarks={bookmarks?.recruitingBookmarks}
			/>
		</div>
	);
};

export default BookmarkContainer;
