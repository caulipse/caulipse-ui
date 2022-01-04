import { GetStudyUserResponse, StudyUser } from '@src/api/response/study';
import { UserPreview } from '@src/api/response/user';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudyUserItemPresenter from './StudyUserItemPresenter';

interface StudyUserItemContainerProps {
  studyUser: GetStudyUserResponse
}
const userD: UserPreview = {
  id: '11',
  profilePicture: 'asdfasdfewacasdcas',
  userName: 'userName',
}
const StudyUserItemContainer = ({ studyUser }: StudyUserItemContainerProps): JSX.Element => {
  const [user, setUser] = useState<StudyUser>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (user === undefined) {
      const userObj: StudyUser = {
        profilePicture: userD.profilePicture,
        userName: userD.userName,
        ...studyUser
      }
      setUser(userObj);
      setLoading(false)
    }
  }, []);
  if (loading) return <div>loading</div>
  
  return (
    <Link to={`/user/${user?.userId}`}>
      <StudyUserItemPresenter studyUser={user!}/>
    </Link>
  );
};

export default StudyUserItemContainer;