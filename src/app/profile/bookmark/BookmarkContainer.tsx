import React from 'react';
import useFetchBookmarks from '@src/hooks/remotes/bookmark/useFetchBookmarks';
import Loader from '@src/components/common/loader/Loader';
import BookmarkPresenter from './BookmarkPresenter';

const BookmarkContainer = (): JSX.Element => {
	const { isLoading, data } = useFetchBookmarks();
	const bookmarks = data?.bookmarks;

	// TODO: 마감여부
	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				bookmarks && <BookmarkPresenter recruitedBookmarks={bookmarks} recruitingBookmarks={bookmarks} />
			)}
		</div>
	);
};

export default BookmarkContainer;
