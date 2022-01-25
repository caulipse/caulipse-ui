import { GetStudyUserResponse } from '@src/api/response/study';
import React from 'react';
import StudyUserHostItemPresenter from './StudyUserHostItemPresenter';

interface StudyUserHostItemContainerProps {
	user: GetStudyUserResponse;
}

const StudyUserHostItemContainer = ({ user }: StudyUserHostItemContainerProps): JSX.Element => {
	return (
		<div>
			<StudyUserHostItemPresenter user={user} />
		</div>
	);
};

export default StudyUserHostItemContainer;
