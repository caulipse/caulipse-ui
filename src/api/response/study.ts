import { Study } from '@api/types';

export interface IResponseGetStudies {
	message: string;
	next_cursor: string;
	perPage_studies: Study[];
}

export interface IResponseGetStudy {
	message: string;
	study: Study;
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
