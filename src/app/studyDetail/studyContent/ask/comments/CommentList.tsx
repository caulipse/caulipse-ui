import { GetCommentResponse } from '@api/response/comment';
import React, { useState } from 'react';
import CommentItem from './CommentItem';

interface CommentListProps {
	comments: GetCommentResponse[];
}

const CommentList = ({ comments }: CommentListProps): JSX.Element => {
	return (
		<div>
			{comments.map((item) => {
				const [show, setShow] = useState<boolean>(false);

				return (
					<div key={item.id} className="comment-list-item-container">
						<CommentItem comment={item} isNested={false} />
						{item.nestedComments?.map((nestedItem, nestedIndex) => {
							if (!show && nestedIndex > 0) {
								return <div />;
							}
							return <CommentItem key={nestedItem.id} comment={nestedItem} isNested />;
						})}
						{item.nestedComments?.length > 1 && !show && (
							<button type="button" className="comment-list-item-more-btn" onClick={() => setShow(!show)}>
								더보기 ({item.nestedComments?.length - 1})
							</button>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default CommentList;
