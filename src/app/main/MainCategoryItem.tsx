import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { MainCategoryType } from '@src/types';
import './index.scss';

interface IMainCategoryItemProps {
	category: MainCategoryType;
	onClick: (category: MainCategoryType) => void;
	isDesktop?: boolean;
}

// FIXME
// 백엔드에 이미지 데이터 추가되면 div -> img 태그로 변경 필요

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
			<Container className={isDesktop ? 'desktop-main-category-item-container' : 'mobile-main-category-item-container'}>
				<div className={isDesktop ? 'desktop-main-category-item-img' : 'mobile-main-category-item-img'} />
				<Typography>{category.label}</Typography>
			</Container>
		</Grid>
	);
};

export default MainCategoryItem;
