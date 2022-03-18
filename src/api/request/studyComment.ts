export interface IRequestPostStudyComment {
	id: string;
	content: string;
	replyTo?: string;
}

export interface IRequestPatchStudyComment {
	id: string;
	content: string;
	commentId: string;
}

export type IRequestDeleteStudyComment = Omit<IRequestPatchStudyComment, 'content'>;
