import React from 'react';
import { Container } from '@material-ui/core';
import categories from '@src/const';
import { MainCategoryType } from '@src/types';
import MainCategoryItem from './MainCategoryItem';
import './index.scss';

interface IMainCategoryPresenterProps {
	onChange: (category: MainCategoryType) => void;
}

const MainCategoryPresenter = ({ onChange }: IMainCategoryPresenterProps): JSX.Element => {
	return (
		<Container className="main-category-presenter-container">
			{categories.map((category) => (
				<MainCategoryItem key={category.code} category={category} onClick={onChange} />
			))}
		</Container>
	);
};

export default MainCategoryPresenter;
