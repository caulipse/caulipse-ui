import React from 'react';
import { BookmarkInterface } from '../interface/interface';
import Bookmarkitem from './BookmarkItem';
import './BookmarkList.scss';

interface BookmarkListProps {
	title: string;
	bookmarkList: BookmarkInterface[] | [];
}

const BookmarkList = ({ title, bookmarkList }: BookmarkListProps) => {
	return (
		<div className="container">
			<div className="headerContainer">
				<div className="horizontalBar" />
				<div className="title">{title}</div>
				<div className="count">&nbsp;({bookmarkList?.length ?? 0})</div>
			</div>
			{bookmarkList.map((item: BookmarkInterface) => (
				<Bookmarkitem key={item.studyId} item={item} />
			))}
		</div>
	);
};

export default BookmarkList;
