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
	categoryCode?: Category;
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
	// TODO API 확인 필요. 실제 response 에 아래 필드는 누락되어 있음
	bookmarks?: number;
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