import React from 'react';
import useFetchStudyUsers from '@src/hooks/remotes/studyUser/useFetchStudyUsers';
import Loader from '@src/components/common/loader/Loader';
import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import useFetchStudyParticipants from '@src/hooks/remotes/studyUser/useFetchStudyParticipants';
import API from '@src/api';
import StudyCurrentStatePresenter from './StudyCurrentStatePresenter';

interface StudyCurrentStateContainerProps {
	studyId: string;
	hostId: string;
	capacity: number;
	isHost: boolean;
}

const StudyCurrentStateContainer = ({
	studyId,
	hostId,
	capacity,
	isHost,
}: StudyCurrentStateContainerProps): JSX.Element => {
	const { data: studyParticipantsData, isLoading: isStudyParticipantsLoading } = useFetchStudyParticipants(studyId);
	const { data: hostData, isLoading: isHostLoading } = useFetchUserProfile(hostId);
	const waitingStudyUser = isHost ? useFetchStudyUsers(studyId) : null;

	console.log('waitingStudyUser', waitingStudyUser);

	if (isStudyParticipantsLoading || isHostLoading || waitingStudyUser?.isLoading) return <Loader />;

	// TODO: 수락 대기중 api 추가
	return studyParticipantsData && hostData ? (
		<StudyCurrentStatePresenter
			host={hostData.userProfile}
			studyUsers={studyParticipantsData}
			waitingStudyUsers={waitingStudyUser?.data}
			capacity={capacity}
			isHost={isHost}
		/>
	) : (
		<div />
	);
};

export default StudyCurrentStateContainer;
