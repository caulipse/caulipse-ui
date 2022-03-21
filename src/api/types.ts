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
	bookmarkCount: number;
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
	categories: string[];
	// Todo: 유저 프로필 사진
}

export interface User {
	id: string;
	email: string;
	isLogout: boolean;
	role: string;
}

export interface Notice {
	id: string;
	title: string;
	about: string;
	createdAt: string;
	views: number;
	hostId: string;
}

export interface Comment {
	NESTED_COMMENT_ID: string;
	USER_ID: string;
	content: string;
	createdAt: string;
	id: string;
	isNested: boolean;
	study: Study;
	user: User;
}
