import React from 'react';
import NumberUtils from '@src/app/shared/utils/number';
import { differenceInDays, format } from 'date-fns';
import '../styles.scss';
import { getDday } from '@src/app/shared/utils/date';

interface StudyInfoContentPresenterProps {
	createdAt: string;
	views: number;
	bookmarkCount: number;
	title: string;
	studyAbout: string;
	dueDate: string;
}

const StudyInfoContentPresenter = ({
	createdAt,
	views,
	bookmarkCount,
	title,
	studyAbout,
	dueDate,
}: StudyInfoContentPresenterProps): JSX.Element => {
	const dDay = differenceInDays(new Date(dueDate), new Date());

	return (
		<div className="content">
			<div className="mh20">
				{dDay >= 0 ? (
					<div className="diff-date-container">
						<div className="diff-date-d-day">{getDday(dueDate)}</div>
						<div className="diff-date-text">모집마감까지 ({format(new Date(dueDate), 'MM.dd')})</div>
					</div>
				) : (
					<div className="diff-date-end">마감된 스터디입니다</div>
				)}

				<div className="studyTimeViewedAnd">
					<div>{format(new Date(createdAt), 'yyyy-MM-dd')}</div>
					<div className="mh5">•</div>
					<div>조회 {views}</div>
					<div className="mh5">•</div>
					<div>북마크 {NumberUtils.toFormattedCount(bookmarkCount)}</div>
				</div>
				<div className="studyTitle">
					<span>{title}</span>
				</div>
				<div className="studyContent">
					<span>{studyAbout}</span>
				</div>
			</div>
		</div>
	);
};

export default StudyInfoContentPresenter;
