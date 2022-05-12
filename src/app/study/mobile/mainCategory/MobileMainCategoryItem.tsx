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
			<div className="study-page-mobile-main-category-item-img" />
			<Typography>{category.label}</Typography>
		</Container>
	);
};

export default MobileMainCategoryItem;
