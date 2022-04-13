import React from 'react';
import StudyInfoContentPresenter from './StudyInfoContentPresenter';

interface StudyInfoConntainerProps {
	createdAt: string;
	views: number;
	bookmarkCount: number;
	title: string;
	studyAbout: string;
	dueDate: string;
}
const StudyInfoContentContainer = ({
	createdAt,
	views,
	bookmarkCount,
	title,
	studyAbout,
	dueDate,
}: StudyInfoConntainerProps): JSX.Element => {
	return (
		<StudyInfoContentPresenter
			createdAt={createdAt}
			views={views}
			bookmarkCount={bookmarkCount}
			title={title}
			studyAbout={studyAbout}
			dueDate={dueDate}
		/>
	);
};

export default StudyInfoContentContainer;
