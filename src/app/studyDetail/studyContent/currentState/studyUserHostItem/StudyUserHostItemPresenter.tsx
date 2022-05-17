import React from 'react';
import { StudyUser, UserProfile } from '@api/types';
import './styles.scss';
import ProfileImage from '@src/components/common/profileImage';

interface StudyUserHostItemPresenterProps {
	user: UserProfile;
}

const StudyUserHostItemPresenter = ({ user }: StudyUserHostItemPresenterProps): JSX.Element => {
	return (
		<div className="study-user-host-item-container">
			{user ? (
				<>
					<ProfileImage
						userId={user.userId}
						userImage={user.image}
						width={40}
						height={40}
						className="study-user-host-item-img"
					/>
					<div className="study-user-host-item-column-container">
						<div className="study-user-host-item-row-container">
							<div className="study-user-host-item-username">{user.userName}</div>
							<div className="study-user-host-item-host">모집장</div>
						</div>
						<div className="study-user-host-item-intro">{user.bio}</div>
					</div>
				</>
			) : (
				<div />
			)}
		</div>
	);
};

export default StudyUserHostItemPresenter;
