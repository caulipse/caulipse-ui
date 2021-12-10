import { GetStudyResponse, GetStudyUserResponse } from '@src/api/response/study';
import StudyContentContainer from '@src/app/studyDetail/studyContent/StudyContentContainer';
import StudyInfoContainer from '@src/app/studyDetail/studyInfo/StudyInfoContainer';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const study: GetStudyResponse = {
  id: "id",
  createdAt: "21.04.29",
  title: "study title",
  studyAbout: "study content",
  time: 90,
  weekday: 1,
  frequency: 3,
  location: "place",
  hostId: "host id",
  capacity: 10,
  membersCount: 4,
  vacancy: 6,
  isOpen: true,
  category: 3,
  views: 10,
}

const StudyDetailPage = (): JSX.Element => {
  const history = useHistory();

  return (
    <div className="studyDetailContainer">
      <div className="backButtonContainer"> 
        <button onClick={() => history.goBack()} type="button">back</button>
      </div>
      <StudyInfoContainer/>
      <StudyContentContainer/>
    </div>
  )
}

export default StudyDetailPage;