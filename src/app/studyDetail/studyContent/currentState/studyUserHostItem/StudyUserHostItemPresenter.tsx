import React from 'react';
import { StudyUser } from '@api/types';
import './styles.scss';

interface StudyUserHostItemPresenterProps {
	user: StudyUser;
	setOpenStudyApproveModal: (params: boolean) => void;
}

const StudyUserHostItemPresenter = ({ user }: StudyUserHostItemPresenterProps): JSX.Element => {
	return (
		<div className="study-user-host-item-container">
			<img className="study-user-host-item-img" src={user.profilePicture} width={40} height={40} alt="프로필 이미지" />
			<div className="study-user-host-item-column-container">
				<div className="study-user-host-item-row-container">
					<div className="study-user-host-item-username">{user.userName}</div>
					<div className="study-user-host-item-host">모집장</div>
				</div>
				<div className="study-user-host-item-intro">{user.shortIntro}</div>
			</div>
		</div>
	);
};

export default StudyUserHostItemPresenter;
