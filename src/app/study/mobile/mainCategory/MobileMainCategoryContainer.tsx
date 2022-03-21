import React from 'react';
import { MainCategoryType } from '@src/types';
import MobileMainCategoryPresenter from './MobileMainCategoryPresenter';

interface IMobileMainCategoryContainerProps {
	onChange: (category: MainCategoryType) => void;
}

const MobileMainCategoryContainer = ({ onChange }: IMobileMainCategoryContainerProps): JSX.Element => {
	return <MobileMainCategoryPresenter onChange={onChange} />;
};

export default MobileMainCategoryContainer;
