export interface CategoryType {
	label: string;
	code: number;
}

export type MainCategoryType = CategoryType & { subCategories: CategoryType[] };
