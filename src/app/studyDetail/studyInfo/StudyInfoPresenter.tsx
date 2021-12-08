import React from 'react';
import './styles.scss';

const StudyInfoPresenter = (): JSX.Element => (
  <div className="StudyInfoContainer">
    <div className="categotyTextContainer">
      <div className="categoty">카테고리</div>
      <div className="categoryDetail">
        <span>Category / category</span>
      </div>
    </div>

    <div className="StudySubInfoContainer">
      <div>Date</div>
      <div>Time</div>
      <div>place</div>
    </div>
  </div>
)

export default StudyInfoPresenter;