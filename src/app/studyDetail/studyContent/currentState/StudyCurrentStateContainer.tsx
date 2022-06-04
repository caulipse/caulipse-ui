import React from 'react';
import useFetchStudyUsers from '@src/hooks/remotes/studyUser/useFetchStudyUsers';
import Loader from '@src/components/common/loader/Loader';
import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import useFetchStudyParticipants from '@src/hooks/remotes/studyUser/useFetchStudyParticipants';
import { UserProfile } from '@src/api/types';
import StudyCurrentStatePresenter from './StudyCurrentStatePresenter';

interface StudyCurrentStateContainerProps {
	studyId: string;
	host: UserProfile;
	capacity: number;
	isHost: boolean;
}

const StudyCurrentStateContainer = ({
	studyId,
	host,
	capacity,
	isHost,
}: StudyCurrentStateContainerProps): JSX.Element => {
	const { data: studyParticipantsData, isLoading: isStudyParticipantsLoading } = useFetchStudyParticipants(studyId);
	const waitingStudyUser = isHost ? useFetchStudyUsers(studyId) : null;

	if (isStudyParticipantsLoading || waitingStudyUser?.isLoading) return <Loader />;

	// TODO: 수락 대기중 api 추가
	return studyParticipantsData ? (
		<StudyCurrentStatePresenter
			host={host}
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
