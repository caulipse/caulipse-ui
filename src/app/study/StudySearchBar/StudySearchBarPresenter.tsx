import React from 'react';
import DropdownSelectOne from '@src/app/shared/components/dropdown/DropdownSelectOne';
import './styles.scss';

interface Props {
  studyCategory: string;
  selectedList: string[];
  onClick: (subCategory: string) => void;
  setFrequency: (frequency: string) => void;
  setDay: (day: string) => void;
  setPlace: (place: string) => void;

}
const StudySearchBarPresenter = ({
  studyCategory,
  selectedList,
  onClick,
  setFrequency,
  setDay,
  setPlace,
}: Props): JSX.Element => (
  <div className="search-b-con">
    <div className="search-b-wrap">
      <div className="search-b-toolBar">
        <div className="search-b-dropdown-con">
          <DropdownSelectOne dropdownTitle="빈도"  list={[]} handleSelect={setFrequency}/>
          <DropdownSelectOne dropdownTitle="장소"  list={[]} handleSelect={setPlace}/>
          <DropdownSelectOne dropdownTitle="요일"  list={[]} handleSelect={setDay}/>
        </div>
        <div className="search-b-bar-con">
          <input className="search-b-bar" placeholder="결과 내 재검색"/>
          <button type="button" className="search-b-bar-bt">검색</button>
        </div>
      </div>
      <div className="search-bar-request-con">
        <div className="search-bar-request-info">
          <button type="button">초기화</button>
          <div>{studyCategory}</div>
        </div>
        <div className="search-bar-request">
          {
            selectedList.map((item) => (
              <button type="button" key={item} onClick={() => { onClick(item) }}>{item}</button>
            ))
          }
        </div>
      </div>
    </div>
  </div>
);

export default StudySearchBarPresenter;