import React from 'react';
import { StudyUser } from '@api/types';
import StudyUserHostItemPresenter from './StudyUserHostItemPresenter';

interface StudyUserHostItemContainerProps {
	user: StudyUser;
	setOpenStudyApproveModal: (params: boolean) => void;
}

const StudyUserHostItemContainer = ({
	user,
	setOpenStudyApproveModal,
}: StudyUserHostItemContainerProps): JSX.Element => {
	return (
		<div>
			<StudyUserHostItemPresenter user={user} setOpenStudyApproveModal={setOpenStudyApproveModal} />
		</div>
	);
};

export default StudyUserHostItemContainer;
