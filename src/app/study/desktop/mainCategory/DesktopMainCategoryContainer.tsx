import React from 'react';
import { MainCategoryType } from '@src/types';
import DesktopMainCategoryPresenter from './DesktopMainCategoryPresenter';

interface IDesktopMainCategoryContainerProps {
	onChange: (category: MainCategoryType) => void;
}

const DesktopMainCategoryContainer = ({ onChange }: IDesktopMainCategoryContainerProps): JSX.Element => {
	return <DesktopMainCategoryPresenter onChange={onChange} />;
};

export default DesktopMainCategoryContainer;
