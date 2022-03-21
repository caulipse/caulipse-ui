import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { MainCategoryType } from '@src/types';
import './index.scss';

interface IMobileMainCategoryItemProps {
	category: MainCategoryType;
	onClick: (category: MainCategoryType) => void;
}

// FIXME
// 백엔드에 이미지 데이터 추가되면 div -> img 태그로 변경 필요

const MobileMainCategoryItem = ({ category, onClick }: IMobileMainCategoryItemProps): JSX.Element => {
	const handleClick = () => {
		onClick(category);
	};
	return (
		<Container className="mobile-main-category-item-container" onClick={handleClick}>
			<div className="mobile-main-category-item-img" />
			<Typography>{category.label}</Typography>
		</Container>
	);
};

export default MobileMainCategoryItem;
