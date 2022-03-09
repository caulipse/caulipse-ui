import React from 'react';
import { Grid } from '@material-ui/core';
import Chip from '@common/chip/Chip';
import { ChipTypeEnum } from '@common/chip/types';
import classnames from 'classnames';
import { CategoryType } from '@src/types';
import './index.scss';

interface ISubCategoryItemProps {
	category: CategoryType;
	onClick: (category: CategoryType) => void;
	selected: boolean;
	// count: number;
}

const SubCategoryItem = ({ category, onClick, selected }: ISubCategoryItemProps): JSX.Element => {
	const handleClick = () => {
		onClick(category);
	};

	// FIXME
	const count = 10;
	return (
		<Grid container item xs={6} className="sub-category-item-container" onClick={handleClick}>
			<Chip onClick={handleClick} label={category.label} selected={selected} type={ChipTypeEnum.secondary} />
			<span className={classnames('sub-category-item-span', { selected })}>{count}</span>
		</Grid>
	);
};

export default SubCategoryItem;
