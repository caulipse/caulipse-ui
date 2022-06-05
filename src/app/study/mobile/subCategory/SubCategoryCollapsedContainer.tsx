import React from 'react';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import { CategoryType } from '@src/types';
import SubCategoryCollapsedPresenter from './SubCategoryCollapsedPresenter';

const SubCategoryCollapsedContainer = (): JSX.Element => {
	const [state, setState] = useAtom(studyListState);
	const { filterOption } = state;

	const onClick = (category: CategoryType) => {
		setState({
			...state,
			filterOption: { ...filterOption, categoryCode: filterOption?.categoryCode?.filter((item) => item !== category) },
		});
	};

	const categories = filterOption?.categoryCode?.filter((item) => item.code % 100);
	return <SubCategoryCollapsedPresenter selectedSubCategories={categories} onClick={onClick} />;
};

export default SubCategoryCollapsedContainer;
