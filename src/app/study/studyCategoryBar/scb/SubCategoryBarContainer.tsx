import React from 'react';
import SubCategoryBarPresenter from './SubCategoryBarPresenter';

interface Props {
  rmSubCategory: (c: string) => void;
  addSubCategory: (c: string) => void;
};
const SubCategoryBarContainer = ({
  rmSubCategory,
  addSubCategory,
}: Props): JSX.Element => {
  const list = ['list1', 'list2', 'list3', 'list4', 'list5', 'list6'];
  return <SubCategoryBarPresenter addSubCategory={addSubCategory} rmSubCategory={rmSubCategory} list={list}/>
};

export default SubCategoryBarContainer;