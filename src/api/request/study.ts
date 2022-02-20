export interface IRequestPostStudy {
	title: string;
	studyAbout: string;
	weekday: string;
	frequency: string;
	location: string;
	capacity: number;
	categoryCode: number;
}

export type IRequestPatchStudy = IRequestPostStudy & { id: string };
