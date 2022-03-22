interface ITempBio {
	tempBio: string;
}

export interface IRequestPostStudyUser {
	id: string;
	data: ITempBio;
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
