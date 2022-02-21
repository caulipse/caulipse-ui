export interface IRequestLogin {
	email: string;
	password: string;
}

export type IRequestSignUp = IRequestLogin;

export interface IRequestPatchUser {
	id: string;
	email: string;
	password: string;
	isLogout: boolean;
	token: string;
	role: string;
}
