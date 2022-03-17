import React from 'react';
import { Container, Grid } from '@material-ui/core';
import categories from '@src/const';
import { CategoryType } from '@src/types';
import SubCategoryItem from './SubCategoryItem';
import './index.scss';

interface ISubCategoryCollapsedPresenterProps {
	selectedSubCategories: CategoryType[];
	onClick: (category: CategoryType) => void;
}

const SubCategoryCollapsedPresenter = ({
	selectedSubCategories,
	onClick,
}: ISubCategoryCollapsedPresenterProps): JSX.Element => {
	return (
		<Container className="sub-category-collapsed-presenter-container">
			{selectedSubCategories?.map((category) => (
				<SubCategoryItem key={category.code} category={category} withClose selected onClick={onClick} />
			))}
		</Container>
	);
};

export default SubCategoryCollapsedPresenter;
