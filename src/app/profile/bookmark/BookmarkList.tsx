import React, { useMemo } from 'react';
import { BookmarkInterface } from '../interface/interface';
import Bookmarkitem from './BookmarkItem';
import './BookmarkList.scss';

interface BookmarkListProps {
	title: string;
	bookmarkList: BookmarkInterface[] | [];
	isBlurred?: boolean;
}

const BookmarkList = ({ title, bookmarkList, isBlurred }: BookmarkListProps) => {
	const sectionedBookMarkList = useMemo(() => {
		const map = new Map();
		bookmarkList.forEach((bookmarkItem) => {
			map.set(bookmarkItem.category, [...(map.get(bookmarkItem.category) ?? []), bookmarkItem.title]);
		});
		return map;
	}, [bookmarkList]);

	return (
		<div className="container">
			<div className="headerContainer">
				<div className="horizontalBar" style={isBlurred ? { backgroundColor: '#929699' } : undefined} />
				<div className="title" style={isBlurred ? { color: '#929699' } : undefined}>
					{title}
				</div>
				{isBlurred || <div className="count">&nbsp;({bookmarkList?.length ?? 0})</div>}
			</div>
			{bookmarkList.map((item: BookmarkInterface) => (
				<Bookmarkitem key={item.studyId} item={item} isBlurred={isBlurred} />
			))}
		</div>
	);
};

BookmarkList.defaultProps = {
	isBlurred: false,
};

export default BookmarkList;
