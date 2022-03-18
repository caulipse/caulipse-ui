import { Comment } from '@src/api/types';
import React, { useMemo } from 'react';
import CommentItemContainer from './CommentItemContainer';

interface CommentListProps {
	comments: Comment[];
	hostId: string;
	studyId: string;
}

export interface ICommentWithNestedComments extends Comment {
	nestedComments: Comment[];
}

const CommentList = ({ comments, hostId, studyId }: CommentListProps): JSX.Element => {
	const commentsWithNestedComments = useMemo(() => {
		const initialValue: Array<ICommentWithNestedComments> = [];
		return comments.reduce((acc, commentItem) => {
			if (commentItem.isNested) {
				return acc;
			}
			return [
				...acc,
				{
					...commentItem,
					nestedComments: comments.filter((nestedItem) => commentItem.id === nestedItem.NESTED_COMMENT_ID),
				},
			];
		}, initialValue);
	}, [comments]);

	return (
		<div>
			{commentsWithNestedComments.map((item) => (
				<CommentItemContainer key={item.id} studyId={studyId} hostId={hostId} item={item} />
			))}
		</div>
	);
};

export default CommentList;
