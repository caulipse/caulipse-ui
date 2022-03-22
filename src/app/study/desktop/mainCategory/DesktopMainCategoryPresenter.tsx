import React from 'react';
import { Container } from '@material-ui/core';
import categories from '@src/const';
import { MainCategoryType } from '@src/types';
import DesktopMainCategoryItem from './DesktopMainCategoryItem';
import './index.scss';

interface IDesktopMainCategoryPresenterProps {
	onChange: (category: MainCategoryType) => void;
}

const DesktopMainCategoryPresenter = ({ onChange }: IDesktopMainCategoryPresenterProps): JSX.Element => {
	return (
		<Container className="desktop-main-category-presenter-container">
			{categories.map((category) => (
				<DesktopMainCategoryItem key={category.code} category={category} onClick={onChange} />
			))}
		</Container>
	);
};

export default DesktopMainCategoryPresenter;
