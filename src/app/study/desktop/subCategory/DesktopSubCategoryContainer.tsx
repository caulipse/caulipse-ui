import React from 'react';
import { CategoryType, MainCategoryType } from '@src/types';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import categories from '@src/const';
import { useLocation } from 'react-router-dom';
import DesktopSubCategoryPresenter from './DesktopSubCategoryPresenter';

const DesktopSubCategoryContainer = (): JSX.Element => {
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
			const categoryFilter = filterOption?.categoryCode?.filter((item) => item.code % 100);
			setState({
				...state,
				filterOption: { ...filterOption, categoryCode: categoryFilter?.concat(category) },
			});
		}
	};

	const mainCategory = categories.find((category) => category.path === pathname.split('study/')[1]);

	return <DesktopSubCategoryPresenter onChange={onChange} mainCategory={mainCategory} />;
};

export default DesktopSubCategoryContainer;
