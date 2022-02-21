export interface IRequestPostUserProfile {
	userId: string;
	userName: string;
	dept: string;
	grade: number;
	bio: string;
}

export type IRequestPatchUserProfile = IRequestPostUserProfile;
