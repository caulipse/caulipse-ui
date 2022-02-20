import React from 'react';
import { StudyUser } from '@api/types';
import './styles.scss';

interface StudyUserItemPresenterProps {
	studyUser: StudyUser;
}
const StudyUserItemPresenter = ({ studyUser }: StudyUserItemPresenterProps): JSX.Element => (
	<div className="study-user-item-container">
		<img className="study-user-item-img" src={studyUser.profilePicture} alt="프로필 이미지" width={40} height={40} />
		<div className="study-user-item-username">{studyUser.userName}</div>
		<div className="study-user-item-intro">{studyUser.shortIntro}</div>
	</div>
);

export default StudyUserItemPresenter;
