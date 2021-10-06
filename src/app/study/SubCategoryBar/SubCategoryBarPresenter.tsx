import React from 'react';
import './styles.scss';
import SubCategoryItemContainer from './subCategoryItem/SubCategoryItemContainer';

interface Props {
  addSubCategory: (subCategory: string) => void;
  rmSubCategory: (subCategory: string) => void;
  list: string[];
}
const SubCategoryBarPresenter = ({
  addSubCategory, 
  rmSubCategory, 
  list,
}: Props): JSX.Element => (
  <div className="sub-c-con">
    <div className="sub-c-wrap">
      {
        list.map((item) => (
          <SubCategoryItemContainer 
            key={item}
            addSubCategory={addSubCategory}
            rmSubCategory={rmSubCategory}
            subCategory={item}
          />
        ))
      }
    </div>
  </div>
);

export default SubCategoryBarPresenter;