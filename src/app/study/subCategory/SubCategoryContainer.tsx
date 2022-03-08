import React, { useState, useEffect } from 'react';
import { CategoryType } from '@src/const';
import SubCategoryPresenter from './SubCategoryPresenter';

interface ISubCategoryPresenterProps {
	mainCategory: CategoryType | undefined;
}

const SubCategoryContainer = ({ mainCategory }: ISubCategoryPresenterProps): JSX.Element => {
	const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>([]);

	const onChange = (category: CategoryType) => {
		if (selectedCategories.includes(category)) {
			setSelectedCategories(selectedCategories.filter((item) => item !== category));
		} else {
			setSelectedCategories(selectedCategories.concat(category));
		}
	};

	useEffect(() => {
		setSelectedCategories([]);
	}, [mainCategory]);
	return (
		<SubCategoryPresenter onChange={onChange} mainCategory={mainCategory} selectedCategories={selectedCategories} />
	);
};

export default SubCategoryContainer;
