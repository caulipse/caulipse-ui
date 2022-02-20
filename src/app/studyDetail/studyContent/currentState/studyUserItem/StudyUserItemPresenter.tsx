import { GetStudyUserResponse, StudyUser } from '@src/api/response/study';
import React from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import './styles.scss';

interface StudyUserItemPresenterProps {
	studyUser: GetStudyUserResponse;
	onClick: () => void;
}
const StudyUserItemPresenter = ({ studyUser, onClick }: StudyUserItemPresenterProps): JSX.Element => {
	return (
		<div className="study-user-item-container">
			<button type="button" onClick={onClick}>
				<IoEllipsisVertical size={24} color="#b1b1b1" />
			</button>
			<img className="study-user-item-img" src={studyUser.profilePicture} alt="프로필 이미지" width={40} height={40} />
			<div className="study-user-item-username">{studyUser.userName}</div>
			<div className="study-user-item-intro">{studyUser.shortIntro}</div>
		</div>
	);
};

export default StudyUserItemPresenter;
