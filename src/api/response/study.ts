import { AppliedStudy, Study, StudyUser } from '@api/types';

export interface IResponseGetStudies {
	message: string;
	studies: Study[];
	pageNo: number;
	pages: number;
	total: number;
}

export interface IResponseGetStudy {
	message: string;
	study: Study;
}

export type IResponseGetStudyUsers = StudyUser[];

export interface IResponseGetMyStudies {
	message: string;
	studies: Study[];
}

export type IResponseGetAppiedStudies = AppliedStudy[];

export interface IResponseGetSearchStudies {
	message: string;
	studies: Study[];
}
