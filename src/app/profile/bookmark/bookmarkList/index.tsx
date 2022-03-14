import { Study } from '@src/api/types';
import React from 'react';
import Bookmarkitem from './BookmarkItem';
import './BookmarkList.scss';

interface BookmarkListProps {
	title: string;
	bookmarkList: Study[];
	isBlurred?: boolean;
}

const BookmarkList = ({ title, bookmarkList, isBlurred }: BookmarkListProps): JSX.Element => {
	return (
		<div className="bookmarkList-container">
			{isBlurred ||
				bookmarkList.map((item) => {
					return <Bookmarkitem key={item.id} item={item} isBlurred={isBlurred} />;
				})}
			{isBlurred && bookmarkList.map((item: Study) => <Bookmarkitem key={item.id} item={item} isBlurred={isBlurred} />)}
		</div>
	);
};

BookmarkList.defaultProps = {
	isBlurred: false,
};

export default BookmarkList;
