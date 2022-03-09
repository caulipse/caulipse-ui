import categories, { CategoryType } from '@src/const';

// eslint-disable-next-line import/prefer-default-export
export const getSubCategoryLabel = (categoryCode: number): string => {
	let result: CategoryType = { label: '', code: 0 };
	categories.forEach((categoryItem) => {
		const filteredData = categoryItem.subCategories.find((subCategoryItem) => subCategoryItem.code === categoryCode);
		if (filteredData) result = filteredData;
	});
	return result.label;
};
