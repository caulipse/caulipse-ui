import React from 'react';
import BookmarkContainer from '@src/app/profile/bookmark/BookmarkContainer';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import BookmarkHeader from '../../../app/profile/header';

const BookmarkPage = (): JSX.Element => {
	return (
		<BrowserRouter>
			<BookmarkHeader />
			<div className="bookmark-page-bg">
				<div className="bookmark-page-container">
					<BookmarkContainer />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default BookmarkPage;
