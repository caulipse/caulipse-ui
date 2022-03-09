import React from 'react';
import { MainCategoryType } from '@src/types';
import MainCategoryPresenter from './MainCategoryPresenter';

interface IMainCategoryPresenterProps {
	onChange: (category: MainCategoryType) => void;
}

const MainCategoryContainer = ({ onChange }: IMainCategoryPresenterProps): JSX.Element => {
	return <MainCategoryPresenter onChange={onChange} />;
};

export default MainCategoryContainer;
