import { Study, StudyUser } from '@api/types';

export interface IResponseGetStudies {
	message: string;
	next_cursor: string;
	studies: Study[];
}

export interface IResponseGetStudy {
	message: string;
	study: Study;
}

export type IResponseGetStudyUsers = StudyUser[];
