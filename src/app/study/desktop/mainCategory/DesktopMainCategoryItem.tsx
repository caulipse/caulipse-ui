import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { MainCategoryType } from '@src/types';
import './index.scss';

interface IDesktopMainCategoryItemProps {
	category: MainCategoryType;
	onClick: (category: MainCategoryType) => void;
}

const DesktopMainCategoryItem = ({ category, onClick }: IDesktopMainCategoryItemProps): JSX.Element => {
	const handleClick = () => {
		onClick(category);
	};
	return (
		<Container className="study-page-desktop-main-category-item-container" onClick={handleClick}>
			<img
				className="study-page-desktop-main-category-item-img"
				src={require(`@src/assets/img/category/imageDesktop/${category.label}.png`).default}
				alt={category.label}
			/>
			<Container className="study-page-desktop-main-category-item-title-container">
				<Typography>{category.code === 400 ? '고시/공무원' : category.label}</Typography>
			</Container>
		</Container>
	);
};

export default DesktopMainCategoryItem;
