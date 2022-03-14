import React from 'react';
import NumberUtils from '@src/app/shared/utils/number';
import { format } from 'date-fns';
import { Study } from '@src/api/types';

interface BookmarkItemProps {
	item: Study;
	isBlurred?: boolean;
}

const Bookmarkitem = ({ item, isBlurred }: BookmarkItemProps) => {
	return (
		<div className={isBlurred ? 'bookmarkItem-blurred-container' : 'bookmarkItem-container'}>
			<div className="bookmarkItem-mid-container">
				<div className="bookmarkItem-title" style={isBlurred ? { color: '#929699' } : undefined}>
					{item.title}
				</div>
				<div className="bookmarkItem-count">
					{item.membersCount}/{item.capacity} 명
				</div>
				<button type="button">X</button>
			</div>
			<div className="bookmarkItem-bottom-container">
				<div>{format(new Date(item.createdAt), 'yy.MM.dd HH:mm')}</div>
				<div className="bookmarkItem-divider-dot">·</div>
				<div>조회 {NumberUtils.toFormattedCount(item.views)}</div>
				<div className="bookmarkItem-divider-dot">·</div>
				{/* TODO: bookmark 개수 */}
				<div>관심 {NumberUtils.toFormattedCount(0)}</div>
			</div>
		</div>
	);
};

Bookmarkitem.defaultProps = {
	isBlurred: false,
};

export default Bookmarkitem;
