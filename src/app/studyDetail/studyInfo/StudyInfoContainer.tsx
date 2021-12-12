import { GetStudyResponse } from '@src/api/response/study';
import React from 'react';
import StudyInfoPresenter from './StudyInfoPresenter';

interface StudyInfoContainerProps {
  study: GetStudyResponse
}
const StudyInfoContainer = ({ study }: StudyInfoContainerProps): JSX.Element => {
  return (
    <StudyInfoPresenter study={study}/>
  );
}

export default StudyInfoContainer