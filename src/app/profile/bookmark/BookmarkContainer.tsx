import React, { useEffect } from 'react';
import * as Factory from 'factory.ts';
import BookmarkPresenter from './BookmarkPresenter';
import { BookmarkInterface } from '../interface/interface';

const BookmarkContainer = (): JSX.Element => {

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

	return (
		<div>
			<BookmarkPresenter
				recruitedBookmarks={getBookmarkData(5)}
				recruitingBookmarks={getBookmarkData(3)}
			/>
		</div>
	);
};

export default BookmarkContainer;
