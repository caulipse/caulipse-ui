export interface IRequestPostStudyUser {
	id: string;
	tempBio: string;
}

export type IRequestPatchStudyUser = IRequestPostStudyUser;

interface IRequestPatchStudyUserByHostBody {
	accept: boolean;
	userId: string;
}
export interface IRequestPatchStudyUserByHost {
	id: string;
	data: IRequestPatchStudyUserByHostBody;
}
