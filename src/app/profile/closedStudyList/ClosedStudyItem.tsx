import React from 'react';
import { IoEllipsisHorizontal, IoEllipsisVertical } from 'react-icons/io5';
import moment from 'moment';
import NumberUtils from '@src/app/shared/utils/number';
import { AppliedStudyInterface } from '../interface/interface';
import './index.scss';

interface ClosedStudyItemProps {
	closedStudyItem: AppliedStudyInterface;
}

const ClosedStudyItem = ({ closedStudyItem }: ClosedStudyItemProps): JSX.Element => {
	const onClickMenu = () => {
		console.log('onClickMenu');
	};

	return (
		<div className="closed-applied-study-item-container">
			<div className="closed-applied-study-item-column-container">
				<div className="closed-applied-study-item-title">{closedStudyItem.title}</div>
				<div className="closed-applied-study-item-row-container">
					<div className="closed-applied-study-item-subtext">
						{moment(closedStudyItem.date).format('YY.MM.DD HH:MM')}
					</div>
					<div className="closed-applied-study-item-divider-dot">·</div>
					<div className="closed-applied-study-item-subtext">
						조회 {NumberUtils.toFormattedCount(closedStudyItem.hits)}
					</div>
					<div className="closed-applied-study-item-divider-dot">·</div>
					<div className="closed-applied-study-item-subtext">
						북마크 {NumberUtils.toFormattedCount(closedStudyItem.bookmarks)}
					</div>
				</div>
			</div>
			<div className="closed-applied-study-item-row-container">
				{closedStudyItem.status === 'accepted' && (
					<div className="closed-applied-study-item-status">참여완료</div>
				)}
				<button type="button" onClick={onClickMenu}>
					<IoEllipsisHorizontal size={24} color="#b1b1b1" />
				</button>
			</div>
		</div>
	);
};

export default ClosedStudyItem;
