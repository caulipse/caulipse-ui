import React from 'react';
import NumberUtils from '@src/app/shared/utils/number';

interface StudyInfoContentPresenterProps {
	createdAt: string | undefined;
	views: number | undefined;
	bookmarks: number | undefined;
	title: string | undefined;
	studyAbout: string | undefined;
}
const StudyInfoContentPresenter = ({
	createdAt,
	views,
	bookmarks,
	title,
	studyAbout,
}: StudyInfoContentPresenterProps): JSX.Element => (
	<div className="content">
		<div className="mh20">
			<div className="studyTimeViewedAnd">
				<div>{createdAt}</div>
				<div className="mh5">•</div>
				<div>조회 {views}</div>
				<div className="mh5">•</div>
				<div>북마크 {NumberUtils.toFormattedCount(bookmarks ?? 0)}</div>
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
