import React, { useEffect, useState } from 'react';
import useFetchStudyUsers from '@src/hooks/remotes/studyUser/useFetchStudyUsers';
import Loader from '@src/components/common/loader/Loader';
import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import StudyCurrentStatePresenter from './StudyCurrentStatePresenter';

interface StudyCurrentStateContainerProps {
	studyId: string;
	hostId: string;
}

const StudyCurrentStateContainer = ({ studyId, hostId }: StudyCurrentStateContainerProps): JSX.Element => {
	const { data, isLoading } = useFetchStudyUsers(studyId);
	const { data: hostData, isLoading: isHostLoading } = useFetchUserProfile(hostId);

	if (isLoading || isHostLoading) return <Loader />;

	return data && hostData ? <StudyCurrentStatePresenter host={hostData.userProfile} studyUsers={data} /> : <div />;
};

export default StudyCurrentStateContainer;
