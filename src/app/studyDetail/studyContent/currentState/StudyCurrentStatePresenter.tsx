import { GetStudyUserResponse } from '@src/api/response/study';
import React from 'react';
import StudyUserHostItemContainer from './studyUserHostItem/StudyUserHostItemContainer';
import StudyUserItemContainer from './studyUserItem/StudyUserItemContainer';
import './styles.scss';

interface StudyCurrentStatePresenterProps {
  studyUsers: [] | GetStudyUserResponse[],
  host: GetStudyUserResponse,
}

const StudyCurrentStatePresenter = ({
  studyUsers,
  host
}: StudyCurrentStatePresenterProps): JSX.Element => (
  <div className="studyCurrentStateContainer">
    <div className="studyCurrentUserContainer">
      <div className="studyCurrentStateTitle">참여인원</div>
      <div className="studyCurrentState">({studyUsers.length + 1}/10)</div>
    </div>
    <div className="studyHost">
      <StudyUserHostItemContainer />
    </div>
    <div className="studyUserListContainer">
      {studyUsers.map((studyUser: GetStudyUserResponse) => {
        return (
          <StudyUserItemContainer key={studyUser.userId} studyUser={studyUser}/>
        )
      })}
    </div>
  </div>
)

export default StudyCurrentStatePresenter;