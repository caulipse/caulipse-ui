import { StudyUser } from '@src/api/response/study';
import React from 'react';
import './styles.scss';

interface StudyUserItemPresenterProps {
  studyUser: StudyUser
}
const StudyUserItemPresenter = ({ studyUser }: StudyUserItemPresenterProps): JSX.Element => (
  <div className="studyUserItemContainer">
    <div className="profileImg">p</div>
    <div className="userInfoContainer">
      <div className="studyUserName">{studyUser.userName}</div>
      <div className="studyUserTempBio">{studyUser.tempBio}</div>
    </div>
  </div>
);

export default StudyUserItemPresenter;