import moment from 'moment';
import React, { useState } from 'react';
import NumberUtils from '@src/app/shared/utils/number';
import { IoEllipsisVertical } from 'react-icons/io5';
import UserStudyMoreModalContainer from '@studyDetail/studyContent/modal/userStudyMoreModal/UserStudyMoreModalContainer';
import ReportModalContainer from '@studyDetail/studyContent/modal/reportModal/ReportModalContainer';
import { AppliedStudyInterface } from '../interface/interface';
import './index.scss';

interface OpenedStudyItemProps {
	openedStudyItem: AppliedStudyInterface;
}

const OpenedStudyItem = ({ openedStudyItem }: OpenedStudyItemProps): JSX.Element => {
	const [openUserMoreModal, setOpenUserMoreModal] = useState<boolean>(false);
	const [openReportModal, setOpenReportModal] = useState<boolean>(false);
	const [openCancelModal, setOpenCancelModal] = useState<boolean>(false);

	const closeStudy = () => {
		console.log('closeStudy');
	};

	const onClickMore = () => {
		setOpenUserMoreModal(!openUserMoreModal);
	};

	return (
		<div className="opened-applied-study-item-container">
			<button type="button">
				<div className="opened-applied-study-item-top-container">
					<div className="opened-applied-study-item-title">{openedStudyItem.title}</div>
					<div>
						<button type="button">
							<IoEllipsisVertical size={24} color="#b1b1b1" onClick={onClickMore} />
						</button>
					</div>
				</div>
				<div className="opened-applied-study-item-mid-container">
					<div className="opened-applied-study-item-mid-text">
						{moment(openedStudyItem.date).format('YY.MM.DD HH:MM')}
					</div>
					<div className="opened-applied-study-item-divider-dot">·</div>
					<div className="opened-applied-study-item-mid-text">
						조회 {NumberUtils.toFormattedCount(openedStudyItem.hits)}
					</div>
					<div className="opened-applied-study-item-divider-dot">·</div>
					<div className="opened-applied-study-item-mid-text">
						북마크 {NumberUtils.toFormattedCount(openedStudyItem.bookmarks)}
					</div>
				</div>
				{openedStudyItem.status === 'accepted' && (
					<div className="opened-applied-study-item-status-accepted-container">
						<div className="opened-applied-study-item-status-accepted-text">참여 수락됨</div>
					</div>
				)}
				{openedStudyItem.status === 'waiting' && (
					<div className="opened-applied-study-item-status-waiting-container">
						<div className="opened-applied-study-item-status-waiting-text">수락 대기중</div>
					</div>
				)}
				{openedStudyItem.status === 'recruiting' && (
					<div className="opened-applied-study-item-status-recruiting-container">
						<button type="button" onClick={closeStudy}>
							<div className="opened-applied-study-item-status-recruiting-text">
								마감하기 ({openedStudyItem?.currentNumber}/{openedStudyItem?.maxNumber})
							</div>
						</button>
					</div>
				)}
			</button>
			<UserStudyMoreModalContainer
				open={openUserMoreModal}
				onClose={setOpenUserMoreModal}
				setOpenReportModal={setOpenReportModal}
				setOpenCancelModal={setOpenCancelModal}
			/>
			<ReportModalContainer open={openReportModal} onClose={setOpenReportModal} />
		</div>
	);
};

export default OpenedStudyItem;
