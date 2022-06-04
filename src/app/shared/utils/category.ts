import categories from '@src/const';
import { CategoryType } from '@src/types';

export const getSubCategoryLabel = (categoryCode: number): string => {
	let result: CategoryType = { label: '', code: 0 };
	categories.forEach((categoryItem) => {
		const filteredData = categoryItem.subCategories.find((subCategoryItem) => subCategoryItem.code === categoryCode);
		if (filteredData) result = filteredData;
	});
	return result.label;
};

export const getMainCategoryLabel = (code: number): string => {
	const mainCategoryFromMainCode = categories.find((categoryItem) => {
		return categoryItem.code === code;
	});

	if (mainCategoryFromMainCode) {
		return mainCategoryFromMainCode.label;
	}

	const mainCategoryFromSubCode = categories.find((categoryItem) => {
		return categoryItem.subCategories.find((subCategoryItem) => subCategoryItem.code === code);
	});
	return mainCategoryFromSubCode?.label ?? '';
};

export const getMainCategoryCode = (subCategoryCode: number): number => {
	const mainCategory = categories.find((categoryItem) => {
		return categoryItem.subCategories.find((subCategoryItem) => subCategoryItem.code === subCategoryCode);
	});
	return mainCategory?.code ?? 100;
};

export const getMainCategoryCodeFromLabel = (mainCategoryLabel: string): number => {
	const mainCategory = categories.find((categoryItem) => {
		return categoryItem.path === mainCategoryLabel;
	});
	return mainCategory?.code ?? 0;
};
