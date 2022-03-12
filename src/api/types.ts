export interface Category {
	code: number;
	main: string;
	sub: string;
}

export interface Host {
	email: string;
	id: string;
	isLogout: boolean;
	password: string;
	role: string;
	token: string;
}

export interface Study {
	HOST_ID: string;
	capacity: number;
	categoryCode: Category;
	createdAt: string;
	frequency: string;
	hostId?: Host;
	id: string;
	isOpen: boolean;
	location: string;
	membersCount: number;
	studyAbout: string;
	title: string;
	vacancy: number;
	views: number;
	weekday: string;
}

export interface StudyUser {
	studyId: string;
	userId: string;
	isAccepted: number;
	tempBio: string;
	// TODO API 확인 필요. 실제 response 에 아래 필드는 누락되어 있음
	userName?: string;
	shortIntro?: string;
	profilePicture?: string;
}

export interface UserProfile {
	userId: string;
	userName: string;
	dept: string;
	grade: string;
	bio: string;
	userAbout: string;
	showDept: boolean;
	showGrade: boolean;
	showAbout: boolean;
	links: string[];
	onBreak: boolean;
	shortUserAbout: string;
	categories: string[];
	// Todo: 유저 프로필 사진, 로그인 id, 유저 카테고리, 한 줄 소개평
}

export interface User {
	id: string;
	email: string;
	isLogout: boolean;
	role: string;
}
