import { GetCommentResponse } from '@src/api/response/comment';
import moment from 'moment';
import React from 'react';
import './comments.scss';

interface CommentItem {
	comment: GetCommentResponse;
}

const CommentItem = ({ comment }: CommentItem): JSX.Element => {
	return (
		<div className="comment-item-container">
			<img className="comment-item-img" src={comment.profilePicture} width={32} height={32} alt="" />
			<div className="comment-item-column-container">
				<div className="comment-item-row-container">
					<div className="comment-item-username">{comment.userName}</div>
					<div className="comment-item-leader">모집장</div>
					<div className="comment-item-createdat">{moment(comment.createdAt).format('YY.MM.DD HH:MM')}</div>
				</div>
				<div className="comment-item-content">{comment.content}</div>
				<div className="comment-item-row-container">
					<div className="comment-item-comment-write">댓글달기</div>
					<div className="comment-item-divider-dot">・</div>
					<div className="comment-item-report">신고</div>
				</div>
			</div>
		</div>
	);
};

export default CommentItem;
