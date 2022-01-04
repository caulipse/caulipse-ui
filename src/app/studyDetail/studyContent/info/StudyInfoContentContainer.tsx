import { GetStudyResponse } from '@src/api/response/study';
import React from 'react';
import StudyInfoContentPresenter from './StudyInfoContentPresenter';

interface StudyInfoConntainerProps {
  study: GetStudyResponse
}
const StudyInfoContentContainer = ({ study }: StudyInfoConntainerProps): JSX.Element => {
  return (
    <StudyInfoContentPresenter study={study}/>
  )
}

export default StudyInfoContentContainer;