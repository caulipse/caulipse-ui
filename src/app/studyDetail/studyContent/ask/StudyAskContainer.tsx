import { GetCommentResponse } from '@src/api/response/comment';
import React, { useState } from 'react';
import StudyAskPresenter from './StudyAskPresenter';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';

const nestedComments: GetCommentResponse[] = [
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

const comments: GetCommentResponse[] = [
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

const StudyAskContainer = (): JSX.Element => {
	const [content, setContent] = useState<string>('');

	return <StudyAskPresenter content={content} setContent={setContent} comments={comments} />;
};

export default StudyAskContainer;
