export interface GetCommentResponse {
	id: string;
	userId: string;
	userName: string;
	profilePicture: string;
	studyId: string;
	createdAt: string;
	isNested: boolean;
	content: string;
	nestedComments: GetCommentResponse[];
	likes: number;
}
