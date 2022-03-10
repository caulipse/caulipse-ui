import { User, UserProfile } from '../types';

export interface UserPreview {
	id: string;
	profilePicture: string;
	userName: string;
}

export interface IResponseGetUserProfile {
	message: string;
	userProfile: UserProfile;
}

export interface IResponseGetUser {
	message: string;
	data: User;
}
