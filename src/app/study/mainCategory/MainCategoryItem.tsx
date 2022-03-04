import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './index.scss';

interface IMainCategoryItemProps {
	label: string;
	code: number;
	onClick: (code: number) => void;
}

// FIXME
// 백엔드에 이미지 데이터 추가되면 div -> img 태그로 변경 필요

const MainCategoryItem = ({ label, code, onClick }: IMainCategoryItemProps): JSX.Element => {
	const handleClick = () => {
		onClick(code);
	};
	return (
		<Container className="main-category-item-container" onClick={handleClick}>
			<div className="main-category-item-img" />
			<Typography>{label}</Typography>
		</Container>
	);
};

export default MainCategoryItem;
