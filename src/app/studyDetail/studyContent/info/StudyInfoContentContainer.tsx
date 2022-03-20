import React from 'react';
import StudyInfoContentPresenter from './StudyInfoContentPresenter';

interface StudyInfoConntainerProps {
	createdAt: string;
	views: number;
	bookmarkCount: number;
	title: string;
	studyAbout: string;
}
const StudyInfoContentContainer = ({
	createdAt,
	views,
	bookmarkCount,
	title,
	studyAbout,
}: StudyInfoConntainerProps): JSX.Element => {
	return (
		<StudyInfoContentPresenter
			createdAt={createdAt}
			views={views}
			bookmarkCount={bookmarkCount}
			title={title}
			studyAbout={studyAbout}
		/>
	);
};

export default StudyInfoContentContainer;
