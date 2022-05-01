import { AppliedStudy, Study, StudyUser } from '@api/types';

export interface IResponseGetStudies {
	message: string;
	studies: Study[];
	pageNo: number;
	pages: number;
	total: number;
}

export type IResponseGetStudy = Study;

export type IResponseGetStudyUsers = StudyUser[];

export type IResponseGetMyStudies = Study[];

export type IResponseGetAppiedStudies = AppliedStudy[];

export type IResponseGetSearchStudies = Study[];
