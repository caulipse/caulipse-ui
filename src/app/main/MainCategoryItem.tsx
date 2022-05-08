import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { MainCategoryType } from '@src/types';
import './index.scss';

interface IMainCategoryItemProps {
	category: MainCategoryType;
	onClick: (category: MainCategoryType) => void;
	isDesktop?: boolean;
}

const MainCategoryItem = ({ category, onClick, isDesktop = false }: IMainCategoryItemProps): JSX.Element => {
	const handleClick = () => {
		onClick(category);
	};

	return (
		<Grid
			item
			xs={isDesktop ? 3 : 4}
			className={isDesktop ? 'desktop-main-category-item-grid' : 'mobile-main-category-item-grid'}
			onClick={handleClick}
		>
			{isDesktop ? (
				<Container className="desktop-main-category-item-container">
					<img
						className="desktop-main-category-item-img "
						src={require(`@src/assets/img/category/imageDesktop/${category.label}.png`).default}
						alt={category.label}
					/>
					<Container>
						<Typography>{category.code === 400 ? '고시/공무원' : category.label}</Typography>
					</Container>
				</Container>
			) : (
				<Container className="mobile-main-category-item-container">
					<div className="mobile-main-category-item-img" />
					<Typography>{category.label}</Typography>
				</Container>
			)}
		</Grid>
	);
};

export default MainCategoryItem;
