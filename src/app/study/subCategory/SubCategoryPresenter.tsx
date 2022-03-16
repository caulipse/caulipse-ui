import React, { useMemo } from 'react';
import { Container, Grid } from '@material-ui/core';
import categories from '@src/const';
import { CategoryType } from '@src/types';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import SubCategoryItem from './SubCategoryItem';

import './index.scss';

interface ISubCategoryPresenterProps {
	onChange: (code: CategoryType) => void;
	mainCategory: CategoryType | undefined;
}

const SubCategoryPresenter = ({ onChange, mainCategory }: ISubCategoryPresenterProps): JSX.Element => {
	const [state] = useAtom(studyListState);
	const { selectedSubCategories } = state;
	const selectedCategory = useMemo(() => {
		return categories.find((category) => {
			return category.code === mainCategory?.code;
		});
	}, [mainCategory]);

	return (
		<Container className="sub-category-presenter-container">
			{!!selectedCategory && (
				<Grid container className="sub-category-presenter-item-container">
					{selectedCategory?.subCategories?.map((category) => (
						<SubCategoryItem
							key={category.code}
							category={category}
							onClick={onChange}
							selected={selectedSubCategories.includes(category)}
						/>
					))}
				</Grid>
			)}
		</Container>
	);
};

export default SubCategoryPresenter;
