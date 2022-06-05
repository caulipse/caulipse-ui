import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { MainCategoryType } from '@src/types';
import './index.scss';

interface IMainCategoryItemProps {
	category: MainCategoryType;
	onClick: (category: MainCategoryType) => void;
}

const MainCategoryItem = ({ category, onClick }: IMainCategoryItemProps): JSX.Element => {
	const handleClick = () => {
		onClick(category);
	};

	return (
		<Container className="mobile-main-category-item-container" onClick={handleClick}>
			<img
				className="mobile-main-category-item-img"
				src={
					require(`@src/assets/img/category/imageSquare/${category.path === '' ? 'total' : category.path}.png`).default
				}
				alt={category.label}
			/>
			<Container className="mobile-main-category-item-title">
				<Typography>{category.code === 400 ? '고시/공무원' : category.label}</Typography>
			</Container>
		</Container>
	);
};

export default MainCategoryItem;
