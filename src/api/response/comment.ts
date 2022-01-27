export interface GetCommentResponse {
	id: string;
	userId: string;
	studyId: string;
	createdAt: string;
	isNested: boolean;
	content: string;
	nestedComments: GetCommentResponse[];
}
