import React, { useEffect, useState } from 'react';
import * as Factory from 'factory.ts';
import BookmarkPresenter from './BookmarkPresenter';
import { BookmarkInterface } from '../interface/interface';

const BookmarkContainer = (): JSX.Element => {
	const [bookmarks, setBookmarks] = useState<BookmarkInterface[]>([]);

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
		setBookmarks(getBookmarkData(5));
	}, []);

	return (
		<div>
			<BookmarkPresenter recruitedBookmarks={bookmarks} recruitingBookmarks={bookmarks} />
		</div>
	);
};

export default BookmarkContainer;
