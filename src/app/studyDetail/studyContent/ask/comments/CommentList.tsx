import { GetCommentResponse } from '@src/api/response/comment';
import React from 'react';
import CommentItem from './CommentItem';

interface CommentListProps {
	comments: GetCommentResponse[];
}

const CommentList = ({ comments }: CommentListProps): JSX.Element => {
	return (
		<div>
			{comments.map((item) => (
				<CommentItem key={item.id} comment={item} />
			))}
		</div>
	);
};

export default CommentList;
