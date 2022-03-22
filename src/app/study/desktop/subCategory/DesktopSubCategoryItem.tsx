import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Chip from '@common/chip/Chip';
import { ChipTypeEnum } from '@common/chip/types';
import classnames from 'classnames';
import { CategoryType } from '@src/types';
import './index.scss';

interface IDesktopSubCategoryItemProps {
	category: CategoryType;
	onClick: (category: CategoryType) => void;
	selected?: boolean;
	// count: number;
}

const DesktopSubCategoryItem = ({ category, onClick, selected = false }: IDesktopSubCategoryItemProps): JSX.Element => {
	const handleClick = () => {
		onClick(category);
	};

	// FIXME
	const count = 10;
	return (
		<Grid container item xs={4} className="desktop-sub-category-item-container" onClick={handleClick}>
			<Chip onClick={handleClick} label={category.label} selected={selected} type={ChipTypeEnum.secondary} />
			<span className={classnames('desktop-sub-category-item-span', { selected })}>{count}</span>
		</Grid>
	);
};

export default DesktopSubCategoryItem;
