import { GetStudyUserResponse } from '@src/api/response/study';
import React from 'react';
import './styles.scss';

interface StudyUserHostItemPresenterProps {
	user: GetStudyUserResponse;
	setOpenStudyApproveModal: (params: boolean) => void;
}

const StudyUserHostItemPresenter = ({
	user,
	setOpenStudyApproveModal,
}: StudyUserHostItemPresenterProps): JSX.Element => {
	return (
		<div className="study-user-host-item-container" onClick={() => setOpenStudyApproveModal(true)}>
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
