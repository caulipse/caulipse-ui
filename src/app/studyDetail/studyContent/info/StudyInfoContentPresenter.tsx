import { GetStudyResponse } from '@src/api/response/study';
import React from 'react';

interface StudyInfoContentPresenterProps {
  study: GetStudyResponse
}
const StudyInfoContentPresenter = ({ study }: StudyInfoContentPresenterProps): JSX.Element => (
  <div className="content">
    <div className="studyTimeViewedAnd">
      <div>{study.createdAt}</div>
      <div>조회 {study.views}</div>
    </div>
    <div className="studyTitle">
      <span>{study.title}</span>
    </div>
    <div className="studyContent">
      <span>{study.studyAbout}</span>
    </div>
  </div>
)

export default StudyInfoContentPresenter;