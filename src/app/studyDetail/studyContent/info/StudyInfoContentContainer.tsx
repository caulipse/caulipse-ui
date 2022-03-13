import React from 'react';
import StudyInfoContentPresenter from './StudyInfoContentPresenter';

interface StudyInfoConntainerProps {
	createdAt: string;
	views: number;
	// bookmarks?: number;
	title: string;
	studyAbout: string;
}
const StudyInfoContentContainer = ({
	createdAt,
	views,
	// bookmarks,
	title,
	studyAbout,
}: StudyInfoConntainerProps): JSX.Element => {
	return (
		<StudyInfoContentPresenter
			createdAt={createdAt}
			views={views}
			// bookmarks={bookmarks}
			title={title}
			studyAbout={studyAbout}
		/>
	);
};

export default StudyInfoContentContainer;
