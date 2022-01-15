import { GetStudyResponse } from '@src/api/response/study';
import React from 'react';
import './styles.scss';

interface StudyInfoPresenterProps {
  study: GetStudyResponse
}
const StudyInfoPresenter = ({ study }: StudyInfoPresenterProps): JSX.Element => (
  <div className="StudyInfoContainer">
    <div className="categoryTextContainer">
      <div className="category">카테고리</div>
      <div className="categoryDetail">
        <span>{study.categoryCode}</span>
      </div>
    </div>

    <div className="StudySubInfoContainer">
      <div>
        <div>요일</div>
        {study.weekday}
      </div>
      <div>
        <div>빈도</div>
        {study.frequency}
      </div>
      <div>
        <div>장소</div>
        {study.location}
      </div>
    </div>
  </div>
)

export default StudyInfoPresenter;