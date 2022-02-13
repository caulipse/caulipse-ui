import { GetStudyUserResponse } from '@src/api/response/study';
import React from 'react';
import StudyUserHostItemPresenter from './StudyUserHostItemPresenter';

interface StudyUserHostItemContainerProps {
	user: GetStudyUserResponse;
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
