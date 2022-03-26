import { CategoryType } from '@src/types';

export interface ISortOption {
	value: string;
	label: string;
}

export interface IFilterOption {
	frequency: string[];
	weekday: string[];
	location: string[];
	categoryCode: CategoryType[];
}

export interface IStudyListState {
	sortOption: ISortOption;
	filterOption: IFilterOption;
}
