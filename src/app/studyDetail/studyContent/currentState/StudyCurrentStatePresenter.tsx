import React from 'react';
import './styles.scss';

const StudyCurrentStatePresenter = (): JSX.Element => (
  <div className="studyCurrentStateContainer">
    <div className="studyCurrentUserContainer">
      <div className="studyCurrentStateTitle">참여인원</div>
      <div className="studyCurrentState">(6/8)</div>
    </div>
    <div className="studyHost">스터디 모집자</div>
    <div className="studyUserListContainer">
     <div>1</div>
     <div>1</div>
     <div>1</div>
     <div>1</div>
    </div>
  </div>
)

export default StudyCurrentStatePresenter;