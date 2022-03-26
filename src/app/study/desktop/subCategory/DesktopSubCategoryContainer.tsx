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
	const { filterOption } = state;

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

	return <DesktopSubCategoryPresenter onChange={onChange} mainCategory={mainCategory} />;
};

export default DesktopSubCategoryContainer;
