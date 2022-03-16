import { List, ListItem } from '@material-ui/core';
import { Study } from '@src/api/types';
import classNames from 'classnames';
import React from 'react';
import Bookmarkitem from './BookmarkItem';
import './BookmarkList.scss';

interface BookmarkListProps {
	bookmarkList: Study[];
	isBlurred?: boolean;
}

const BookmarkList = ({ bookmarkList, isBlurred }: BookmarkListProps): JSX.Element => {
	return (
		<div className="bookmarkList-container">
			{bookmarkList.map((item, idx, { length }) => {
				return <Bookmarkitem key={item.id} item={item} isBlurred={isBlurred} isBottomMargin={idx !== length - 1} />;
			})}
		</div>
	);
};

BookmarkList.defaultProps = {
	isBlurred: false,
};

export default BookmarkList;
