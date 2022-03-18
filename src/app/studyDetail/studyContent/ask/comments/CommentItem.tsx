import React from 'react';
import useModal from '@src/hooks/modal/useModal';
import './comments.scss';
import ModalKeyEnum from '@common/modal/enum';
import format from 'date-fns/format';
import { Comment } from '@src/api/types';

interface CommentItemProps {
	comment: Comment;
	isNested?: boolean;
	hostId: string;
}

const CommentItem = ({ comment, isNested, hostId }: CommentItemProps): JSX.Element => {
	const { openModal } = useModal();

	const onClickReport = () => {
		// TODO: 신고 API 연동
		openModal(ModalKeyEnum.ReportModal);
	};

	return (
		<div className={`comment-item-container ${isNested ? 'comment-item-nested-bg' : ''}`}>
			<img
				className="comment-item-img"
				// src={comment.profilePicture}
				width={isNested ? 24 : 32}
				height={isNested ? 24 : 32}
				alt=""
			/>
			<div className="comment-item-column-container">
				<div className="comment-item-row-container">
					<div className="comment-item-username">{comment.USER_ID}</div>
					{comment.USER_ID === hostId && <div className="comment-item-leader">모집장</div>}
					<div className="comment-item-createdat">{format(new Date(comment.createdAt), 'yy.MM.dd HH:mm')}</div>
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
						<button className="comment-item-report" type="button" onClick={onClickReport}>
							신고
						</button>
					</div>
					<button type="button" className={isNested ? 'comment-item-helpful' : 'comment-item-curious'}>
						{/* {isNested ? '도움이 됐어요' : '저도 궁금해요'} {comment.likes} */}
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
