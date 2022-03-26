import React from 'react';
import { Container } from '@material-ui/core';
import categories from '@src/const';
import { MainCategoryType, CategoryType } from '@src/types';
import DesktopMainCategoryItem from './DesktopMainCategoryItem';
import './index.scss';

interface IDesktopMainCategoryPresenterProps {
	onChange: (category: MainCategoryType) => void;
}

const DesktopMainCategoryPresenter = ({ onChange }: IDesktopMainCategoryPresenterProps): JSX.Element => {
	const categoryArr = [
		{
			label: '전체',
			path: '',
			code: 0,
			subCategories: [] as CategoryType[],
		},
	].concat(categories);

	return (
		<Container className="desktop-main-category-presenter-container">
			{categoryArr.map((category) => (
				<DesktopMainCategoryItem key={category.code} category={category} onClick={onChange} />
			))}
		</Container>
	);
};

export default DesktopMainCategoryPresenter;
