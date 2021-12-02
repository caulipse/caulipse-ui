import React from 'react';
import './styles.scss';

interface Props {
  state: boolean
  onClick: () => void;
  subCategory: string;
}
const SubCategoryItemPresenter = ({
  state,
  onClick,
  subCategory
}: Props): JSX.Element => (
  <button type="button" onClick={onClick} className={state ? 'studyItem-t' : 'studyItem-f'}>{subCategory}</button>
);

export default SubCategoryItemPresenter;