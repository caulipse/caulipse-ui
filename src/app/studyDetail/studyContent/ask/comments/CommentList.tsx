import { Comment } from '@src/api/types';
import InputBase from '@src/app/shared/components/input/InputBase';
import React, { useState } from 'react';
import CommentItem from './CommentItem';

interface CommentListProps {
	comments: Comment[];
	hostId: string;
}

const CommentList = ({ comments, hostId }: CommentListProps): JSX.Element => {
	return (
		<div>
			{comments.map((item) => {
				const [show, setShow] = useState<boolean>(false);
				const [showCommentInput, setShowCommentInput] = useState<boolean>(false);
				const [content, setContent] = useState<string>('');
				const onSubmit = () => {
					console.log('onSubmit');
				};

				return (
					<div key={item.id} className="comment-list-item-container">
						<CommentItem
							comment={item}
							isNested={false}
							hostId={hostId}
							showCommentInput={showCommentInput}
							setShowCommentInput={setShowCommentInput}
						/>
						{/* TODO: nested된 comment 작업 */}
						{/* {item.nestedComments?.map((nestedItem, nestedIndex) => {
							if (!show && nestedIndex > 0) {
								return <div />;
							}
							return <CommentItem key={nestedItem.id} comment={nestedItem} isNested />;
						})}
						{item.nestedComments?.length > 1 && !show && (
							<button type="button" className="comment-list-item-more-btn" onClick={() => setShow(!show)}>
								더보기 ({item.nestedComments?.length - 1})
							</button>
						)} */}
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
			})}
		</div>
	);
};

export default CommentList;
