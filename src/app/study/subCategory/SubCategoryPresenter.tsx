import React, { useMemo } from 'react';
import { Container, Grid } from '@material-ui/core';
import categories, { CategoryType } from '@src/const';
import SubCategoryItem from './SubCategoryItem';
import './index.scss';

interface ISubCategoryPresenterProps {
	onChange: (code: CategoryType) => void;
	mainCategory: CategoryType | undefined;
	selectedCategories: CategoryType[];
}

const SubCategoryPresenter = ({
	onChange,
	mainCategory,
	selectedCategories,
}: ISubCategoryPresenterProps): JSX.Element => {
	const selectedCategory = useMemo(() => {
		return categories.find((category) => {
			return category.code === mainCategory?.code;
		});
	}, [mainCategory]);
	return (
		<Container className="sub-category-presenter-container">
			{!!selectedCategory && (
				<Grid container className="sub-category-presenter-item-container">
					{selectedCategory?.subCategories?.map((category) => (
						<SubCategoryItem
							key={category.code}
							category={category}
							onClick={onChange}
							selected={selectedCategories.includes(category)}
						/>
					))}
				</Grid>
			)}
		</Container>
	);
};

export default SubCategoryPresenter;
