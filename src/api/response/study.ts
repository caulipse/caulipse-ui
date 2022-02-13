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
	hostId: Host;
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

export interface IResponseGetStudies {
	message: string;
	next_cursor: string;
	perPage_studies: Study[];
}

export interface GetStudyResponse {
	id: string;
	createdAt: string;
	title: string;
	studyAbout: string;
	time: number;
	weekday: number;
	frequency: number;
	location: string;
	hostId: string;
	capacity: number;
	membersCount: number;
	vacancy: number;
	isOpen: boolean;
	categoryCode: number;
	views: number;
	bookmarks?: number;
}

export interface GetStudyUserResponse {
	userId: string;
	studyId: string;
	isAccepted: boolean;
	tempBio: string;
	userName?: string;
	profilePicture?: string;
	shortIntro?: string;
}
export interface StudyUser {
	userId: string;
	studyId: string;
	isAccepted: boolean;
	tempBio: string;
	profilePicture: string;
	userName: string;
}

export interface InquiryResponse {
	inquiryId: number;
	profilePicture: string;
	username: string;
	isLeader: boolean;
	createdAt: Date;
	content: string;
	likes: number;
	comments: InquiryResponse[];
}
