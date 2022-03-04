import React from 'react';
import { Container } from '@material-ui/core';
import categories from '@src/const';
import MainCategoryItem from './MainCategoryItem';
import './index.scss';

interface IMainCategoryPresenterProps {
	onChange: (code: number) => void;
}

const MainCategoryPresenter = ({ onChange }: IMainCategoryPresenterProps): JSX.Element => {
	return (
		<Container className="main-category-presenter-container">
			{categories.map((category) => (
				<MainCategoryItem key={category.code} label={category.label} code={category.code} onClick={onChange} />
			))}
		</Container>
	);
};

export default MainCategoryPresenter;
