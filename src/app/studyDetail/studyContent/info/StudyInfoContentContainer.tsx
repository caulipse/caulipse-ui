import React from 'react';
import StudyInfoContentPresenter from './StudyInfoContentPresenter';

interface StudyInfoConntainerProps {
	createdAt: Date|string | undefined;
	views: number | undefined;
	bookmarks: number | undefined;
	title: string | undefined;
	studyAbout: string | undefined;
}
const StudyInfoContentContainer = ({
	createdAt,
	views,
	bookmarks,
	title,
	studyAbout,
}: StudyInfoConntainerProps): JSX.Element => {
	return (
		<StudyInfoContentPresenter
			createdAt={createdAt}
			views={views}
			bookmarks={bookmarks}
			title={title}
			studyAbout={studyAbout}
		/>
	);
};

export default StudyInfoContentContainer;
