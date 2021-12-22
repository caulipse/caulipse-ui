import React from 'react';
import BookmarkContainer from '@src/app/profile/bookmark/BookmarkContainer';
import './index.scss';

const BookmarkPage = (): JSX.Element => {
	return (
		<div className="bookmark-page-bg">
			<div className="bookmark-page-container">
				<BookmarkContainer />
			</div>
		</div>
	);
};

export default BookmarkPage;
