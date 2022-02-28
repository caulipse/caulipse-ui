import React from 'react';
import BookmarkContainer from '@src/app/profile/bookmark/BookmarkContainer';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

const BookmarkPage = (): JSX.Element => {
	return (
		<BrowserRouter>
			<div className="bookmark-page-bg">
				<div className="bookmark-page-container">
					<BookmarkContainer />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default BookmarkPage;
