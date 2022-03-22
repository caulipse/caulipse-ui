export interface IRequestPostStudy {
	title: string;
	studyAbout: string;
	weekday: string;
	frequency: string;
	location: string;
	capacity: number;
	categoryCode: number;
}

type IRequestPatchStudyData = Partial<IRequestPostStudy>;
export interface IRequestPatchStudy {
	id: string;
	data: IRequestPatchStudyData;
}
