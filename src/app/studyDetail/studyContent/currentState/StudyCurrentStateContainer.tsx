import React, { useEffect, useState } from 'react';
import { StudyUser } from '@api/types';
import useFetchStudyUsers from '@src/hooks/remotes/studyUser/useFetchStudyUsers';
import Loader from '@src/components/common/loader/Loader';
import StudyCurrentStatePresenter from './StudyCurrentStatePresenter';

interface StudyCurrentStateContainerProps {
	studyId: string;
	hostId: string;
}

const hostD: StudyUser = {
	userId: '1',
	studyId: 'asdfasdf234efawe32fd',
	isAccepted: 1,
	tempBio: 'dfdf',
	userName: 'name',
	shortIntro: '짧은 소개글입니다',
};

const StudyCurrentStateContainer = ({ studyId, hostId }: StudyCurrentStateContainerProps): JSX.Element => {
	const { data, isLoading } = useFetchStudyUsers(studyId);
	console.log(data);

	if (isLoading) return <Loader />;

	return data ? <StudyCurrentStatePresenter host={hostD} studyUsers={data} /> : <div />;
};

export default StudyCurrentStateContainer;
