import categories, { CategoryType } from '@src/const';

export const getSubCategoryLabel = (categoryCode: number): string => {
	let result: CategoryType = { label: '', code: 0 };
	categories.forEach((categoryItem) => {
		const filteredData = categoryItem.subCategories.find((subCategoryItem) => subCategoryItem.code === categoryCode);
		if (filteredData) result = filteredData;
	});
	return result.label;
};

export const getMainCategoryLabel = (subCategoryCode: number): string => {
	const mainCategory = categories.find((categoryItem) => {
		return categoryItem.subCategories.find((subCategoryItem) => subCategoryItem.code === subCategoryCode);
	});
	return mainCategory?.label ?? '';
};
