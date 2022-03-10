import { UserProfile } from "../types";

export interface UserPreview {
	id: string;
	profilePicture: string;
	userName: string;
}

export interface IResponseGetUserProfile {
	message: string;
	userProfile: UserProfile;
}
