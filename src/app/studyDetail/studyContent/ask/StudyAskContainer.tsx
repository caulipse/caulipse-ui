import { GetCommentResponse } from '@src/api/response/comment';
import { InquiryResponse } from '@src/api/response/study';
import React, { useState } from 'react';
import StudyAskPresenter from './StudyAskPresenter';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';

const comments: GetCommentResponse[] = [
	{
		id: '11',
		userId: 'dfdf',
		studyId: 'asdfasdf234efawe32fd',
		createdAt: '2021-09-18',
		isNested: false,
		content: 'jfjfjfjf03n2n jsandi',
		nestedComments: [],
	},
	{
		id: '11',
		userId: 'dfdfefef',
		studyId: 'asdfasdf234efawe32fd',
		createdAt: '2021-09-18',
		isNested: false,
		content: 'jfjfjfffjfj',
		nestedComments: [],
	},
	{
		id: '11',
		userId: 'dfdfaefadfe',
		studyId: 'asdfasdf234efawe32fd',
		createdAt: '2021-09-18',
		isNested: false,
		content: 'jfjfjfjf030n3j',
		nestedComments: [],
	},
];

const StudyAskContainer = (): JSX.Element => {
	const [content, setContent] = useState<string>('');

	return <StudyAskPresenter content={content} setContent={setContent} comments={comments} />;
};

export default StudyAskContainer;
