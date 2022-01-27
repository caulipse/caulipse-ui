import { GetCommentResponse } from '@src/api/response/comment';
import React from 'react';

interface CommentItem {
	comment: GetCommentResponse;
}

const CommentItem = ({ comment }: CommentItem): JSX.Element => {
	return <div>{comment.content}</div>;
};

export default CommentItem;
