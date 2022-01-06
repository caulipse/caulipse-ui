import moment from 'moment';
import React from 'react';
import NumberUtils from '@src/app/shared/utils/number';
import { IoEllipsisVertical } from 'react-icons/io5';
import { AppliedStudyInterface } from '../interface/interface';
import './index.scss';

interface OpenedAppliedStudyItemProps {
	openedAppliedStudyItem: AppliedStudyInterface;
}

const OpenedAppliedStudyItem = ({ openedAppliedStudyItem }: OpenedAppliedStudyItemProps): JSX.Element => {
	return (
		<div className="opened-applied-study-item-container">
			<button type="button">
				<div className="opened-applied-study-item-top-container">
					<div className="opened-applied-study-item-title">{openedAppliedStudyItem.title}</div>
					<div>
						<button type="button">
							<IoEllipsisVertical size={24} color="#b1b1b1" />
						</button>
					</div>
				</div>
				<div className="opened-applied-study-item-mid-container">
					<div className="opened-applied-study-item-mid-text">
						{moment(openedAppliedStudyItem.date).format('YY.MM.DD HH:MM')}
					</div>
					<div className="opened-applied-study-item-divider-dot">·</div>
					<div className="opened-applied-study-item-mid-text">
						조회 {NumberUtils.toFormattedCount(openedAppliedStudyItem.hits)}
					</div>
					<div className="opened-applied-study-item-divider-dot">·</div>
					<div className="opened-applied-study-item-mid-text">
						북마크 {NumberUtils.toFormattedCount(openedAppliedStudyItem.bookmarks)}
					</div>
				</div>
				{openedAppliedStudyItem.status === 'accepted' && (
					<div className="opened-applied-study-item-status-accepted-container">
						<div className="opened-applied-study-item-status-accepted-text">참여 수락됨</div>
					</div>
				)}
				{openedAppliedStudyItem.status === 'waiting' && (
					<div className="opened-applied-study-item-status-waiting-container">
						<div className="opened-applied-study-item-status-waiting-text">수락 대기중</div>
					</div>
				)}
			</button>
		</div>
	);
};

export default OpenedAppliedStudyItem;
