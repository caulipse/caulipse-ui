import React, { useState } from 'react';
import useModal from '@src/hooks/modal/useModal';
import './comments.scss';
import ModalKeyEnum from '@common/modal/enum';
import format from 'date-fns/format';
import { Comment } from '@src/api/types';
import { useAtom } from 'jotai';
import globalState, { userState as globalUserState } from '@src/state';
import useDeleteStudyComment from '@src/hooks/remotes/comment/useDeleteStudyComment';
import { useHistory } from 'react-router-dom';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { getProfileImgs } from '@src/app/shared/utils/profileImg';

interface CommentItemProps {
	comment: Comment;
	hostId: string;
	setShowCommentInput?: (param: boolean) => void;
	studyId: string;
}

const CommentItem = ({ comment, hostId, setShowCommentInput, studyId }: CommentItemProps): JSX.Element => {
	const [state] = useAtom(globalState);
	const [userState] = useAtom(globalUserState);
	const myId = userState.userId;
	const { openModal } = useModal();
	const history = useHistory();
	const { openSnackbar } = useSnackbar();
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
				src={
					getProfileImgs().includes(comment.user.image)
						? require(`@src/assets/img/profileImg/${comment.user.image}`).default
						: ''
				}
				width={comment.isNested ? 24 : 32}
				height={comment.isNested ? 24 : 32}
				alt=""
			/>
			<div className="comment-item-column-container">
				<div className="comment-item-row-container">
					<div className="comment-item-username">{comment.user.userName}</div>
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
									if (!state.login) {
										openModal(ModalKeyEnum.LoginModal, { history, openSnackbar });
										return;
									}
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
					{/* <button type="button" className={comment.isNested ? 'comment-item-helpful' : 'comment-item-curious'}>
						{comment.isNested ? '도움이 됐어요' : '저도 궁금해요'} {comment.likes}
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default CommentItem;
