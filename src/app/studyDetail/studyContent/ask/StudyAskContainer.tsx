import { Comment } from '@src/api/types';
import useFetchStudyComment from '@src/hooks/remotes/comment/useFetchStudyComment';
import React, { useState } from 'react';
import StudyAskPresenter from './StudyAskPresenter';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';

const nestedComments: any[] = [
	{
		id: '111',
		userId: 'dfdf',
		userName: '이름2',
		profilePicture: sampleImgUrl,
		studyId: 'asdfasdf234efawe32fd',
		createdAt: '2021-09-18',
		isNested: true,
		content: 'jfjfjfjf03n2n jsandi',
		nestedComments: [],
		likes: 6,
	},
	{
		id: '121',
		userId: 'dfdfefef',
		userName: '이름2',
		profilePicture: sampleImgUrl,
		studyId: 'asdfasdf234efawe32fd',
		createdAt: '2021-09-18',
		isNested: true,
		content: 'jfjfjfffjfj',
		nestedComments: [],
		likes: 6,
	},
];

const comments: any[] = [
	{
		id: '11',
		userId: 'dfdf',
		userName: '이름',
		profilePicture: sampleImgUrl,
		studyId: 'asdfasdf234efawe32fd',
		createdAt: '2021-09-18',
		isNested: false,
		content: 'jfjfjfjf03n2n jsandi',
		nestedComments: [],
		likes: 6,
	},
	{
		id: '12',
		userId: 'dfdfefef',
		userName: '이름',
		profilePicture: sampleImgUrl,
		studyId: 'asdfasdf234efawe32fd',
		createdAt: '2021-09-18',
		isNested: false,
		content: 'jfjfjfffjfj',
		nestedComments,
		likes: 6,
	},
	{
		id: '13',
		userId: 'dfdfaefadfe',
		userName: '이름',
		profilePicture: sampleImgUrl,
		studyId: 'asdfasdf234efawe32fd',
		createdAt: '2021-09-18',
		isNested: false,
		content: 'jfjfjfjf030n3j',
		nestedComments,
		likes: 6,
	},
];

interface StudyAskContainerProps {
	studyId: string;
}

const StudyAskContainer = ({ studyId }: StudyAskContainerProps): JSX.Element => {
	const [content, setContent] = useState<string>('');
	const { data, isLoading } = useFetchStudyComment(studyId);
	console.log(data);

	return <StudyAskPresenter studyId={studyId} content={content} setContent={setContent} comments={comments} />;
};

export default StudyAskContainer;
