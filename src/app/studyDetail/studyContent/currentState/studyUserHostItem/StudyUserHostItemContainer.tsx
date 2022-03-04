import React from 'react';
import { StudyUser } from '@api/types';
import StudyUserHostItemPresenter from './StudyUserHostItemPresenter';

interface StudyUserHostItemContainerProps {
	user: StudyUser;
}

const StudyUserHostItemContainer = ({ user }: StudyUserHostItemContainerProps): JSX.Element => {
	return (
		<div>
			<StudyUserHostItemPresenter user={user} />
		</div>
	);
};

export default StudyUserHostItemContainer;
