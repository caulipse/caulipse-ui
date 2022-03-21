import React from 'react';
import { CategoryType, MainCategoryType } from '@src/types';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import SubCategoryPresenter from './SubCategoryPresenter';

interface ISubCategoryPresenterProps {
	mainCategory: MainCategoryType | undefined;
}

const SubCategoryContainer = ({ mainCategory }: ISubCategoryPresenterProps): JSX.Element => {
	const [state, setState] = useAtom(studyListState);
	const { selectedSubCategories } = state;

	const onChange = (category: CategoryType) => {
		if (selectedSubCategories.includes(category)) {
			setState({ ...state, selectedSubCategories: selectedSubCategories.filter((item) => item !== category) });
		} else {
			setState({ ...state, selectedSubCategories: selectedSubCategories.concat(category) });
		}
	};

	return <SubCategoryPresenter onChange={onChange} mainCategory={mainCategory} />;
};

export default SubCategoryContainer;
