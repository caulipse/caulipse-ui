import { CategoryType } from '@src/types';

export interface ISortOption {
	value: string;
	label: string;
}

export interface IStudyListState {
	sortOption: ISortOption;
	selectedSubCategories: CategoryType[];
}
