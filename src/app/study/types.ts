import { CategoryType } from '@src/types';

export interface ISortOption {
	value: string;
	label: string;
}

export interface IFilterOption {
	frequency: string[];
	weekday: string[];
	location: string[];
}

export interface IStudyListState {
	sortOption: ISortOption;
	filterOption: IFilterOption;
	selectedSubCategories: CategoryType[];
}
