import React, { useMemo } from 'react';
import { BookmarkInterface } from '../../interface/interface';
import Bookmarkitem from './BookmarkItem';
import './BookmarkList.scss';

interface BookmarkListProps {
	title: string;
	bookmarkList: BookmarkInterface[] | [];
	isBlurred?: boolean;
}

interface sectionedBookMarkListItemProps {
	key: string;
	value: BookmarkInterface[] | [];
}

const BookmarkList = ({ title, bookmarkList, isBlurred }: BookmarkListProps) => {
	const sectionedBookmarkList = useMemo(() => {
		const map = new Map<string, BookmarkInterface[] | []>();
		bookmarkList.forEach((bookmarkItem) => {
			map.set(bookmarkItem.category, [...(map.get(bookmarkItem.category) ?? []), bookmarkItem]);
		});
		return map;
	}, [bookmarkList]);

	return (
		<div className="container">
			{isBlurred||Array.from(sectionedBookmarkList).map(([key, value]) => {
				return (
					<div key={key}>
						<div className='bookmarkItemCategory'>{key}</div>
						{value.map((item: BookmarkInterface) => (
							<Bookmarkitem key={item.studyId} item={item} isBlurred={isBlurred} />
						))}
					</div>
				);
			})}
			{isBlurred&&bookmarkList.map((item: BookmarkInterface) => (
				<Bookmarkitem key={item.studyId} item={item} isBlurred={isBlurred} />
			))}
		</div>
	);
};

BookmarkList.defaultProps = {
	isBlurred: false,
};

export default BookmarkList;
