export interface IRequestPostStudyUser {
	id: string;
	tempBio: string;
}

export type IRequestPatchStudyUser = IRequestPostStudyUser;

export interface IRequestPatchStudyUserByHost {
	id: string;
	accept: boolean;
	userId: string;
}
