import React from 'react';
import NumberUtils from '@src/app/shared/utils/number';
import format from 'date-fns/format';

interface StudyInfoContentPresenterProps {
	createdAt: string;
	views: number;
	// bookmarks?: number;
	title: string;
	studyAbout: string;
}
const StudyInfoContentPresenter = ({
	createdAt,
	views,
	// bookmarks,
	title,
	studyAbout,
}: StudyInfoContentPresenterProps): JSX.Element => (
	<div className="content">
		<div className="mh20">
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
