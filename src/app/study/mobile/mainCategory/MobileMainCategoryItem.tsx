import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { MainCategoryType } from '@src/types';
import './index.scss';

interface IMobileMainCategoryItemProps {
	category: MainCategoryType;
	onClick: (category: MainCategoryType) => void;
}

const MobileMainCategoryItem = ({ category, onClick }: IMobileMainCategoryItemProps): JSX.Element => {
	const handleClick = () => {
		onClick(category);
	};
	return (
		<Container className="study-page-mobile-main-category-item-container" onClick={handleClick}>
			<img
				className="mobile-main-category-item-img"
				src={require(`@src/assets/img/category/imageDesktop/${category.label}.png`).default}
				alt={category.label}
			/>
			<Container>
				<Typography>{category.code === 400 ? '고시/공무원' : category.label}</Typography>
			</Container>
		</Container>
	);
};

export default MobileMainCategoryItem;
