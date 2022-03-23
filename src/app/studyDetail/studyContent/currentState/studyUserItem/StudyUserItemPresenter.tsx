import React from 'react';
import { StudyUser } from '@api/types';
import { IoEllipsisVertical } from 'react-icons/io5';
import './styles.scss';

interface StudyUserItemPresenterProps {
	studyUser: StudyUser;
	onClick: () => void;
	isHost: boolean;
}

// TODO: userName, profilePicture 서버에서 값 내려주면 확인하기
const StudyUserItemPresenter = ({ studyUser, onClick, isHost }: StudyUserItemPresenterProps): JSX.Element => {
	return (
		<div className="study-user-item-container">
			{isHost && (
				<button type="button" onClick={onClick}>
					<IoEllipsisVertical size={24} color="#b1b1b1" />
				</button>
			)}
			<img className="study-user-item-img" src={studyUser.profilePicture} alt="" width={40} height={40} />
			<div className="study-user-item-username">{studyUser.userName}</div>
			<div className="study-user-item-intro">{studyUser.tempBio}</div>
		</div>
	);
};

export default StudyUserItemPresenter;
