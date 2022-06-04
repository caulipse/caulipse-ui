/* eslint-disable camelcase */
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

export type frequencyEnum = 'once' | 'twice' | 'more';
export type weekdayEnum = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
export type locationEnum = 'no_contact' | 'room' | 'library' | 'study_cafe' | 'cafe' | 'loc1' | 'loc2' | 'else';

export interface Study {
	HOST_ID: string;
	capacity: number;
	categoryCode: string;
	createdAt: string;
	frequency: frequencyEnum;
	hostId: UserProfile;
	id: string;
	isOpen: boolean;
	location: locationEnum[];
	membersCount: number;
	studyAbout: string;
	title: string;
	vacancy: number;
	views: number;
	weekday: weekdayEnum[];
	bookmarkCount: number;
	dueDate: string;
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
	image: string;
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
	user: UserProfile;
}

export interface Notification {
	Notification_CREATED_AT: string;
	Notification_ID: string;
	Notification_NOTICE_ID?: string;
	Notification_NOTI_ABOUT: string;
	Notification_READ: number;
	Notification_STUDY_ID: string;
	Notification_TITLE: string;
	Notification_TYPE: number;
	Notification_USER_ID: string;
}

export interface AppliedStudy {
	bookmarkCount: number;
	capacity: number;
	createdAt: string;
	dueDate: string;
	id: string;
	isAccepted: boolean;
	title: string;
	views: number;
	membersCount: number;
}
