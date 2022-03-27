import React from 'react';
import { Container } from '@material-ui/core';
import categories from '@src/const';
import { MainCategoryType, CategoryType } from '@src/types';
import MobileMainCategoryItem from './MobileMainCategoryItem';
import './index.scss';

interface IMobileMainCategoryPresenterProps {
	onChange: (category: MainCategoryType) => void;
}

const MobileMainCategoryPresenter = ({ onChange }: IMobileMainCategoryPresenterProps): JSX.Element => {
	const categoryArr = [
		{
			label: '전체',
			path: '',
			code: 0,
			subCategories: [] as CategoryType[],
		},
	].concat(categories);

	return (
		<Container className="mobile-main-category-presenter-container">
			{categoryArr.map((category) => (
				<MobileMainCategoryItem key={category.code} category={category} onClick={onChange} />
			))}
		</Container>
	);
};

export default MobileMainCategoryPresenter;
