import React from 'react';
import useFetchBookmarks from '@src/hooks/remotes/bookmark/useFetchBookmarks';
import Loader from '@src/components/common/loader/Loader';
import { isFuture, isPast, isToday } from 'date-fns';
import BookmarkPresenter from './BookmarkPresenter';

const BookmarkContainer = (): JSX.Element => {
	const { isLoading, data: bookmarks } = useFetchBookmarks();

	const openedBookmarks = bookmarks?.filter((item) => item.isOpen);
	const closedBookmarks = bookmarks?.filter((item) => !item.isOpen);

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				openedBookmarks &&
				closedBookmarks && (
					<BookmarkPresenter recruitedBookmarks={closedBookmarks} recruitingBookmarks={openedBookmarks} />
				)
			)}
		</div>
	);
};

export default BookmarkContainer;
