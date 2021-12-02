import React, { useState } from 'react';
import SubCategoryItemPresenter from './SubCategoryItemPresenter';

interface Props {
  subCategory: string;
  addSubCategory: (subCategory: string) => void;
  rmSubCategory: (subCategory: string) => void;
}
const SubCategoryItemContainer = ({
  subCategory,
  addSubCategory,
  rmSubCategory,
}: Props): JSX.Element => {
  const [state, setState] = useState<boolean>(false);
  const onClick = () => {
    if (!state) addSubCategory(subCategory);
    else rmSubCategory(subCategory);
    setState(!state);
  }
  
  return (
    <SubCategoryItemPresenter onClick={onClick} subCategory={subCategory} state={state}/>
  );
}

export default SubCategoryItemContainer