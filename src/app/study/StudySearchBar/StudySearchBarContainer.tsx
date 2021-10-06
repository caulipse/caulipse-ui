import React, { useState } from 'react';
import StudySearchBarPresenter from './StudySearchBarPresenter';

interface Props {
  studyCategory: string;
  selectedList: string[];
  rmSubCategory: (subCategory: string) => void
}
const StudySearchBarContainer = ({
  studyCategory,
  selectedList,
  rmSubCategory,
}: Props): JSX.Element => {
  const [frequency, setFrequency] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [day, setDay] = useState<string>('');
  
  const onClick = (subCategory: string)=> {
    rmSubCategory(subCategory);
  }

  return (
    <StudySearchBarPresenter
      studyCategory={studyCategory}
      selectedList={selectedList}
      onClick={onClick}
      setFrequency={setFrequency}
      setPlace={setPlace}
      setDay={setDay}
    />
  );
};

export default StudySearchBarContainer;