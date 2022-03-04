import React from 'react';
import MainCategoryPresenter from './MainCategoryPresenter';

interface IMainCategoryPresenterProps {
	onChange: (code: number) => void;
}

const MainCategoryContainer = ({ onChange }: IMainCategoryPresenterProps): JSX.Element => {
	return <MainCategoryPresenter onChange={onChange} />;
};

export default MainCategoryContainer;
