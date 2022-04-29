import { UserProfile } from '../types';

export type IRequestPostUserProfile = Pick<UserProfile, 'userId' | 'userName' | 'dept' | 'grade' | 'onBreak'>;

export type IRequestPatchUserProfile = Partial<UserProfile>;

export interface IRequestPatchUserRole {
	userId: string;
	token: string;
}
export interface IRequestPatchResetPwMail {
	email: string;
}

export interface IRequestPatchResetPw {
	id: string;
	email: string;
	password: string;
}
