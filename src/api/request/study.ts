import { locationEnum, weekdayEnum } from '../types';

export interface IRequestPostStudy {
	title: string;
	studyAbout: string;
	weekday: weekdayEnum[];
	frequency: string;
	location: locationEnum[];
	capacity: number;
	categoryCode: number;
	dueDate: string;
}

type IRequestPatchStudyData = Partial<IRequestPostStudy>;
export interface IRequestPatchStudy {
	id: string;
	data: IRequestPatchStudyData;
}
