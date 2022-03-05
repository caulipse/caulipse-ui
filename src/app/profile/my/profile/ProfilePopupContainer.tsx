import { UserProfile } from '@src/api/types';
import React from 'react';
import ProfilePopupPresenter from './ProfilePopupPresenter';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';

interface ProfilePopupContainerProps {
	profileSheetVisible: boolean;
	setProfileSheetVisible: (param: boolean) => void;
	userProfile: UserProfile;
}

const ProfilePopupContainer = ({
	profileSheetVisible,
	setProfileSheetVisible,
	userProfile
}: ProfilePopupContainerProps): JSX.Element => {

	return (
		<ProfilePopupPresenter
			profileSheetVisible={profileSheetVisible}
			setProfileSheetVisible={setProfileSheetVisible}
			profilePicture={sampleImgUrl}
			shortUserAbout={userProfile.userAbout}
			userName={userProfile.userName}
			dept={userProfile.dept}
			grade={Number(userProfile.grade)}
			status={userProfile.onBreak?'휴학중':'재학중'}
			links={userProfile.links}
			userAbout={userProfile.userAbout}
			// Todo: 더미 데이터 변경하기
			tags={['CPA', '토익 스피킹', '면접']}
		/>
	);
};

export default ProfilePopupContainer;
