import React, { useMemo } from 'react';
import { Container, Grid } from '@material-ui/core';
import categories from '@src/const';
import { CategoryType, MainCategoryType } from '@src/types';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import DesktopSubCategoryItem from './DesktopSubCategoryItem';

import './index.scss';

interface IDesktopSubCategoryPresenterProps {
	onChange: (code: CategoryType) => void;
	mainCategory: MainCategoryType | undefined;
}

const DesktopSubCategoryPresenter = ({ onChange, mainCategory }: IDesktopSubCategoryPresenterProps): JSX.Element => {
	const [state] = useAtom(studyListState);
	const { selectedSubCategories } = state;
	const selectedCategory = useMemo(() => {
		return categories.find((category) => {
			return category.code === mainCategory?.code;
		});
	}, [mainCategory]);

	return mainCategory && !!mainCategory.subCategories.length ? (
		<Container className="desktop-sub-category-presenter-container">
			{!!selectedCategory && (
				<Grid container className="desktop-sub-category-presenter-item-container">
					{selectedCategory?.subCategories?.map((category) => (
						<DesktopSubCategoryItem
							key={category.code}
							category={category}
							onClick={onChange}
							selected={selectedSubCategories.includes(category)}
						/>
					))}
				</Grid>
			)}
		</Container>
	) : (
		<></>
	);
};

export default DesktopSubCategoryPresenter;
