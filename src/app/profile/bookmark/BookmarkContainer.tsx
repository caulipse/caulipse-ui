import React from 'react';
import useFetchBookmarks from '@src/hooks/remotes/bookmark/useFetchBookmarks';
import Loader from '@src/components/common/loader/Loader';
import BookmarkPresenter from './BookmarkPresenter';

const BookmarkContainer = (): JSX.Element => {
	const { isLoading, data: bookmarks } = useFetchBookmarks();

	const openedBookmarks = bookmarks?.filter((item) => new Date(item.dueDate) >= new Date());
	const closedBookmarks = bookmarks?.filter((item) => new Date(item.dueDate) < new Date());

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				openedBookmarks &&
				closedBookmarks && (
					<BookmarkPresenter recruitedBookmarks={openedBookmarks} recruitingBookmarks={closedBookmarks} />
				)
			)}
		</div>
	);
};

export default BookmarkContainer;
