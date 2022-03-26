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

	return <SubCategoryPresenter onChange={onChange} mainCategory={mainCategory} />;
};

export default SubCategoryContainer;
