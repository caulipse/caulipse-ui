import React from 'react';
import './styles.scss';

const StudyContentPresenter = (): JSX.Element => (
  <div className="studyContentContainer">
    <div className="studyContentButtons">
      <button className="infoButton" type="button">
        <span>스터디 정보</span>
      </button>
      <button className="currentStateButton" type="button">
        <span>참가 현황</span>
      </button>
      <button className="askButton" type="button">
        <span>문의글</span>
      </button>
    </div>

    <div className="content">
      <div className="studyTimeViewedAnd">
        <div>time</div>
        <div>viewed</div>
      </div>
      <div className="studyTitle">
        <span>Title</span>
      </div>
      <div className="studyContent">
       dd
      </div>
    </div>

  </div>
)

export default StudyContentPresenter;