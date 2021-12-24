import { GetStudyUserResponse } from '@src/api/response/study';
import { GetUserProfileResponse } from '@src/api/response/user';
import React, { useEffect, useState } from 'react';
import StudyCurrentStatePresenter from './StudyCurrentStatePresenter';

interface StudyCurrentStateContainerProps {
  studyId: string, 
  hostId: string
}
const studyUserD: GetStudyUserResponse[] = [
  {
    userId: '11',
    studyId: 'asdfasdf234efawe32fd',
    isAccepted: false,
    tempBio: 'dfdf'
  },
  {
    userId: '12',
    studyId: 'asdfasdf234efawe32fd',
    isAccepted: false,
    tempBio: 'dfdf'
  },
  {
    userId: '13',
    studyId: 'asdfasdf234efawe32fd',
    isAccepted: true,
    tempBio: 'dfdf'
  },
]

const hostD: GetStudyUserResponse= {
  userId: '1',
  studyId: 'asdfasdf234efawe32fd',
  isAccepted: true,
  tempBio: 'dfdf'
}
const StudyCurrentStateContainer = ({
  studyId,
  hostId
}: StudyCurrentStateContainerProps): JSX.Element => {
  const [studyUser, setStudyUser] = useState<GetStudyUserResponse[] | []>(studyUserD);


  return (
    <StudyCurrentStatePresenter host={hostD} studyUsers={studyUser} />
  )
}

export default StudyCurrentStateContainer;