import React from 'react';
import { UserProfile } from '@api/types';
import StudyUserHostItemPresenter from './StudyUserHostItemPresenter';

interface StudyUserHostItemContainerProps {
	user: UserProfile;
}

const StudyUserHostItemContainer = ({ user }: StudyUserHostItemContainerProps): JSX.Element => {
	return (
		<div>
			<StudyUserHostItemPresenter user={user} />
		</div>
	);
};

export default StudyUserHostItemContainer;
