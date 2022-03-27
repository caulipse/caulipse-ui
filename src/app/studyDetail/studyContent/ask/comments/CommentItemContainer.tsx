import InputBase from '@src/app/shared/components/input/InputBase';
import usePostStudyComment from '@src/hooks/remotes/comment/usePostStudyComment';
import React, { useState } from 'react';
import CommentItem from './CommentItem';
import { ICommentWithNestedComments } from './CommentList';

interface CommentItemContainerProps {
	studyId: string;
	item: ICommentWithNestedComments;
	hostId: string;
}

const CommentItemContainer = ({ studyId, item, hostId }: CommentItemContainerProps): JSX.Element => {
	const postComment = usePostStudyComment();

	const [show, setShow] = useState<boolean>(false);
	const [showCommentInput, setShowCommentInput] = useState<boolean>(false);
	const [content, setContent] = useState<string>('');
	const onSubmit = () => {
		postComment.mutate({
			id: studyId,
			content,
			replyTo: item.id,
		});
		setContent('');
	};

	return (
		<div key={item.id} className="comment-list-item-container">
			<CommentItem comment={item} hostId={hostId} setShowCommentInput={setShowCommentInput} studyId={studyId} />
			{item.nestedComments?.map((nestedItem, nestedIndex) => {
				if (!show && nestedIndex > 0) {
					return <div />;
				}
				return <CommentItem key={nestedItem.id} comment={nestedItem} hostId={hostId} studyId={studyId} />;
			})}
			{item.nestedComments?.length > 1 && !show && (
				<button type="button" className="comment-list-item-more-btn" onClick={() => setShow(!show)}>
					더보기 ({item.nestedComments?.length - 1})
				</button>
			)}
			{showCommentInput && (
				<InputBase
					placeholder="궁금한 점들을 물어보세요!"
					content={content}
					setContent={setContent}
					onSubmit={onSubmit}
				/>
			)}
		</div>
	);
};

export default CommentItemContainer;
