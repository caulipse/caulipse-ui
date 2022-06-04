import React from 'react';
import { CategoryType, MainCategoryType } from '@src/types';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import { useLocation } from 'react-router-dom';
import categories from '@src/const';
import SubCategoryPresenter from './SubCategoryPresenter';

const SubCategoryContainer = (): JSX.Element => {
	const [state, setState] = useAtom(studyListState);
	const { filterOption } = state;
	const { pathname } = useLocation();
	const onChange = (category: CategoryType) => {
		if (filterOption?.categoryCode?.includes(category)) {
			setState({
				...state,
				filterOption: {
					...filterOption,
					categoryCode: filterOption?.categoryCode?.filter((item) => item !== category),
				},
			});
		} else {
			setState({
				...state,
				filterOption: { ...filterOption, categoryCode: filterOption?.categoryCode?.concat(category) },
			});
		}
	};
	const mainCategory = categories.find((category) => category.path === pathname.split('study/')[1]);
	return <SubCategoryPresenter onChange={onChange} mainCategory={mainCategory} />;
};

export default SubCategoryContainer;
