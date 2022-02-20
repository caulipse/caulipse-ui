import { GetCommentResponse } from '@api/response/comment';
import InputBase from '@src/app/shared/components/input/InputBase';
import React from 'react';
import CommentList from './comments/CommentList';
import './styles.scss';

interface StudyAskPresenterProps {
	content: string;
	setContent: (content: string) => void;
	comments: GetCommentResponse[];
}
const StudyAskPresenter = ({ content, setContent, comments }: StudyAskPresenterProps): JSX.Element => (
	<div className="studyAskContainer">
		<div className="studyAskInputContainer">
			<InputBase placeholder="궁금한 점들을 물어보세요!" content={content} setContent={setContent} />
		</div>
		<div className="StudyCommentsListContainer">
			<div className="StudyCommentsListInfo">
				<div className="StudyCommentListTitle">문의글</div>
				<div className="StudyCommentListCount">({comments?.length})</div>
			</div>
			<div>
				<CommentList comments={comments} />
			</div>
		</div>
	</div>
);

export default StudyAskPresenter;
