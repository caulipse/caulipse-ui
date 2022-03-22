import React from 'react';
import { CategoryType, MainCategoryType } from '@src/types';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import DesktopSubCategoryPresenter from './DesktopSubCategoryPresenter';

interface IDesktopSubCategoryContainerProps {
	mainCategory: MainCategoryType;
}

const DesktopSubCategoryContainer = ({ mainCategory }: IDesktopSubCategoryContainerProps): JSX.Element => {
	const [state, setState] = useAtom(studyListState);
	const { selectedSubCategories } = state;

	const onChange = (category: CategoryType) => {
		if (selectedSubCategories.includes(category)) {
			setState({ ...state, selectedSubCategories: selectedSubCategories.filter((item) => item !== category) });
		} else {
			setState({ ...state, selectedSubCategories: selectedSubCategories.concat(category) });
		}
	};

	return <DesktopSubCategoryPresenter onChange={onChange} mainCategory={mainCategory} />;
};

export default DesktopSubCategoryContainer;
