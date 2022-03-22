import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { MainCategoryType } from '@src/types';
import './index.scss';

interface IDesktopMainCategoryItemProps {
	category: MainCategoryType;
	onClick: (category: MainCategoryType) => void;
}

// FIXME
// 백엔드에 이미지 데이터 추가되면 div -> img 태그로 변경 필요

const DesktopMainCategoryItem = ({ category, onClick }: IDesktopMainCategoryItemProps): JSX.Element => {
	const handleClick = () => {
		onClick(category);
	};
	return (
		<Container className="study-page-desktop-main-category-item-container" onClick={handleClick}>
			<Container className="study-page-desktop-main-category-item-img">
				<Typography>{category.label}</Typography>
			</Container>
		</Container>
	);
};

export default DesktopMainCategoryItem;
