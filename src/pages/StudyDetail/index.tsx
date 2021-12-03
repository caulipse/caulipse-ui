import StudyContentContainer from '@src/app/studyDetail/studyContent/StudyContentContainer';
import StudyInfoContainer from '@src/app/studyDetail/studyInfo/StudyInfoContainer';
import React from 'react';
import { useParams } from 'react-router-dom';

const StudyDetailPage = (): JSX.Element => {
  return (
    <div>
      <StudyInfoContainer/>
      <StudyContentContainer/>
    </div>
  )
}

export default StudyDetailPage;