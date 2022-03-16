import React from 'react';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import { CategoryType } from '@src/types';
import SubCategoryCollapsedPresenter from './SubCategoryCollapsedPresenter';

const SubCategoryCollapsedContainer = (): JSX.Element => {
	const [state, setState] = useAtom(studyListState);
	const { selectedSubCategories } = state;

	const onClick = (category: CategoryType) => {
		setState({ ...state, selectedSubCategories: selectedSubCategories.filter((item) => item !== category) });
	};
	return <SubCategoryCollapsedPresenter selectedSubCategories={selectedSubCategories} onClick={onClick} />;
};

export default SubCategoryCollapsedContainer;
