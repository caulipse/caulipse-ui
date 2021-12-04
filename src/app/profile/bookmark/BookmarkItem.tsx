import moment from 'moment';
import React from 'react';
import { BookmarkInterface } from '../interface/interface';

interface BookmarkItemProps {
	item: BookmarkInterface;
}

const Bookmarkitem = ({ item }: BookmarkItemProps) => {
	return (
		<div className="bookmarkItemContainer">
			<div className="bookmarkItemCategory">{item.category}</div>
			<div className="bookmarkItemMidContainer">
				<div className="bookmarkItemTitle">{item.title}</div>
				<div className="bookmarkItemCount">
					{item.currentNumber}/{item.maxNumber} 명
				</div>
				<button type="button">X</button>
			</div>
            <div className='bookmarkItemBottomContainer'>
                <div>{moment(item.date).format('YYYY-MM-DD HH:MM')}</div>
                <div className='bookmarkItemDividerDot'>·</div>
                <div>조회 {item.hits}</div>
                <div className='bookmarkItemDividerDot'>·</div>
                <div>관심 {item.stars}</div>
            </div>
		</div>
	);
};

export default Bookmarkitem;
