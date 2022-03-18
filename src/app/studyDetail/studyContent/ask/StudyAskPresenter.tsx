import { Comment } from '@src/api/types';
import InputBase from '@src/app/shared/components/input/InputBase';
import usePostStudyComment from '@src/hooks/remotes/comment/usePostStudyComment';
import React from 'react';
import CommentList from './comments/CommentList';
import './styles.scss';

interface StudyAskPresenterProps {
	studyId: string;
	content: string;
	setContent: (content: string) => void;
	comments: Comment[];
}
const StudyAskPresenter = ({ studyId, content, setContent, comments }: StudyAskPresenterProps): JSX.Element => {
	const postComment = usePostStudyComment();

	const writeComment = () => {
		postComment.mutate({
			id: studyId,
			content,
		});
		setContent('');
	};

	return (
		<div className="studyAskContainer">
			<div className="studyAskInputContainer">
				<InputBase
					placeholder="궁금한 점들을 물어보세요!"
					content={content}
					setContent={setContent}
					onSubmit={writeComment}
				/>
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
};

export default StudyAskPresenter;
