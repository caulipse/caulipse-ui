import { UserPreview } from '@api/response/user';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StudyUser } from '@api/types';
import StudyUserItemPresenter from './StudyUserItemPresenter';

interface StudyUserItemContainerProps {
	studyUser: StudyUser;
}

const StudyUserItemContainer = ({ studyUser }: StudyUserItemContainerProps): JSX.Element => {
	return (
		<Link to={`/user/${studyUser?.userId}`}>
			<StudyUserItemPresenter studyUser={studyUser} />
		</Link>
	);
};

export default StudyUserItemContainer;
