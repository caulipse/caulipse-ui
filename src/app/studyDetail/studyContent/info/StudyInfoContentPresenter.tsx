import React from 'react';
import NumberUtils from '@src/app/shared/utils/number';
import { differenceInDays, format } from 'date-fns';
import '../styles.scss';

interface StudyInfoContentPresenterProps {
	createdAt: string;
	views: number;
	// bookmarks?: number;
	title: string;
	studyAbout: string;
}

const endDate = new Date(2023, 0, 1);

const StudyInfoContentPresenter = ({
	createdAt,
	views,
	// bookmarks,
	title,
	studyAbout,
}: StudyInfoContentPresenterProps): JSX.Element => (
	<div className="content">
		<div className="mh20">
			<div className="diff-date-container">
				<div className="diff-date-d-day">D-{differenceInDays(endDate, new Date())}</div>
				<div className="diff-date-text">모집마감까지 ({format(endDate, 'MM.dd')})</div>
			</div>
			<div className="studyTimeViewedAnd">
				<div>{format(new Date(createdAt), 'yyyy-MM-dd')}</div>
				<div className="mh5">•</div>
				<div>조회 {views}</div>
				<div className="mh5">•</div>
				<div>북마크 {NumberUtils.toFormattedCount(0)}</div>
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

export default StudyInfoContentPresenter;
