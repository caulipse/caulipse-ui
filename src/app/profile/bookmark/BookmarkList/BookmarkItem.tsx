import React from 'react';
import moment from 'moment';
import NumberUtils from '@src/app/shared/utils/number';
import { BookmarkInterface } from '../../interface/interface';

interface BookmarkItemProps {
	item: BookmarkInterface;
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
					{item.currentNumber}/{item.maxNumber} 명
				</div>
				<button type="button">X</button>
			</div>
			<div className="bookmarkItem-bottom-container">
				<div>{moment(item.date).format('YY.MM.DD HH:MM')}</div>
				<div className="bookmarkItem-divider-dot">·</div>
				<div>조회 {NumberUtils.toFormattedCount(item.hits)}</div>
				<div className="bookmarkItem-divider-dot">·</div>
				<div>관심 {NumberUtils.toFormattedCount(item.stars)}</div>
			</div>
		</div>
	);
};

Bookmarkitem.defaultProps = {
	isBlurred: false,
};

export default Bookmarkitem;
