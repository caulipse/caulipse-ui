import Loader from '@src/components/common/loader/Loader';
import useFetchStudyComment from '@src/hooks/remotes/comment/useFetchStudyComments';
import globalState from '@src/state';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import StudyAskPresenter from './StudyAskPresenter';

interface StudyAskContainerProps {
	studyId: string;
	hostId: string;
}

const StudyAskContainer = ({ studyId, hostId }: StudyAskContainerProps): JSX.Element => {
	const [state] = useAtom(globalState);

	const [content, setContent] = useState<string>('');
	const { data, isLoading } = useFetchStudyComment(studyId, state.login);

	if (isLoading) return <Loader />;

	return data ? (
		<StudyAskPresenter hostId={hostId} studyId={studyId} content={content} setContent={setContent} comments={data} />
	) : (
		<div />
	);
};

export default StudyAskContainer;
