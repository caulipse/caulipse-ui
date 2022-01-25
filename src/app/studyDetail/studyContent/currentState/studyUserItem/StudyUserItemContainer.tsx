import { GetStudyUserResponse, StudyUser } from '@src/api/response/study';
import { UserPreview } from '@src/api/response/user';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudyUserItemPresenter from './StudyUserItemPresenter';

interface StudyUserItemContainerProps {
	studyUser: GetStudyUserResponse;
}

const StudyUserItemContainer = ({ studyUser }: StudyUserItemContainerProps): JSX.Element => {
	return (
		<Link to={`/user/${studyUser?.userId}`}>
			<StudyUserItemPresenter studyUser={studyUser} />
		</Link>
	);
};

export default StudyUserItemContainer;
