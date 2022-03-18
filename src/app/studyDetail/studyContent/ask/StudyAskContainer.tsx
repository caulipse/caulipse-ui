import Loader from '@src/components/common/loader/Loader';
import useFetchStudyComment from '@src/hooks/remotes/comment/useFetchStudyComments';
import React, { useState } from 'react';
import StudyAskPresenter from './StudyAskPresenter';

interface StudyAskContainerProps {
	studyId: string;
}

const StudyAskContainer = ({ studyId }: StudyAskContainerProps): JSX.Element => {
	const [content, setContent] = useState<string>('');
	const { data, isLoading } = useFetchStudyComment(studyId);

	if (isLoading) return <Loader />;

	return data?.comments ? (
		<StudyAskPresenter studyId={studyId} content={content} setContent={setContent} comments={data.comments} />
	) : (
		<div />
	);
};

export default StudyAskContainer;
