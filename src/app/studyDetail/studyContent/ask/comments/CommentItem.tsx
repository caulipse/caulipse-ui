import { GetCommentResponse } from '@api/response/comment';
import moment from 'moment';
import React from 'react';
import './comments.scss';

interface CommentItemProps {
	comment: GetCommentResponse;
	isNested?: boolean;
}

const CommentItem = ({ comment, isNested }: CommentItemProps): JSX.Element => {
	return (
		<div className={`comment-item-container ${isNested ? 'comment-item-nested-bg' : ''}`}>
			<img
				className="comment-item-img"
				src={comment.profilePicture}
				width={isNested ? 24 : 32}
				height={isNested ? 24 : 32}
				alt=""
			/>
			<div className="comment-item-column-container">
				<div className="comment-item-row-container">
					<div className="comment-item-username">{comment.userName}</div>
					<div className="comment-item-leader">모집장</div>
					<div className="comment-item-createdat">{moment(comment.createdAt).format('YY.MM.DD HH:MM')}</div>
				</div>
				<div className="comment-item-content">{comment.content}</div>
				<div className="comment-item-bottom-container">
					<div className="comment-item-row-container">
						{comment.isNested || (
							<button className="comment-item-comment-write" type="button">
								댓글달기
							</button>
						)}
						{comment.isNested || <div className="comment-item-divider-dot">・</div>}
						<button className="comment-item-report" type="button">
							신고
						</button>
					</div>
					<button type="button" className={isNested ? 'comment-item-helpful' : 'comment-item-curious'}>
						{isNested ? '도움이 됐어요' : '저도 궁금해요'} {comment.likes}
					</button>
				</div>
			</div>
		</div>
	);
};

CommentItem.defaultProps = {
	isNested: false,
};

export default CommentItem;
