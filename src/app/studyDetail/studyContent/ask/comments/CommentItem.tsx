import React, { useState } from 'react';
import useModal from '@src/hooks/modal/useModal';
import './comments.scss';
import ModalKeyEnum from '@common/modal/enum';
import format from 'date-fns/format';
import { Comment } from '@src/api/types';
import { useAtom } from 'jotai';
import globalState from '@src/state';
import useDeleteStudyComment from '@src/hooks/remotes/comment/useDeleteStudyComment';

interface CommentItemProps {
	comment: Comment;
	hostId: string;
	setShowCommentInput?: (param: boolean) => void;
	studyId: string;
}

const CommentItem = ({ comment, hostId, setShowCommentInput, studyId }: CommentItemProps): JSX.Element => {
	const [state] = useAtom(globalState);
	const myId = state.userId;
	const { openModal } = useModal();
	const deleteComment = useDeleteStudyComment(studyId, comment.id);

	const onClickReport = () => {
		openModal(ModalKeyEnum.ReportModal, studyId);
	};

	const onClickDelete = () => {
		deleteComment.mutate();
	};

	return (
		<div className={`comment-item-container ${comment.isNested ? 'comment-item-nested-bg' : ''}`}>
			<img
				className="comment-item-img"
				// src={comment.profilePicture}
				width={comment.isNested ? 24 : 32}
				height={comment.isNested ? 24 : 32}
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
							<button
								className="comment-item-comment-write"
								type="button"
								onClick={() => {
									if (setShowCommentInput) setShowCommentInput(true);
								}}
							>
								댓글달기
							</button>
						)}
						{comment.isNested || <div className="comment-item-divider-dot">・</div>}
						<button
							className="comment-item-report"
							type="button"
							onClick={comment.USER_ID === myId ? onClickDelete : onClickReport}
						>
							{comment.USER_ID === myId ? '삭제' : '신고'}
						</button>
					</div>
					<button type="button" className={comment.isNested ? 'comment-item-helpful' : 'comment-item-curious'}>
						{/* {comment.isNested ? '도움이 됐어요' : '저도 궁금해요'} {comment.likes} */}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CommentItem;
