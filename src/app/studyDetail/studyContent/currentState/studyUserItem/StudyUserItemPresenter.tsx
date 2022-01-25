import { GetStudyUserResponse, StudyUser } from '@src/api/response/study';
import React from 'react';
import './styles.scss';

interface StudyUserItemPresenterProps {
	studyUser: GetStudyUserResponse;
}
const StudyUserItemPresenter = ({ studyUser }: StudyUserItemPresenterProps): JSX.Element => (
	<div className="study-user-item-container">
		<img className="study-user-item-img" src={studyUser.profilePicture} alt="프로필 이미지" width={40} height={40} />
		<div className="study-user-item-username">{studyUser.userName}</div>
		<div className="study-user-item-intro">{studyUser.shortIntro}</div>
	</div>
);

export default StudyUserItemPresenter;
