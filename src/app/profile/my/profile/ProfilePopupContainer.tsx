import { useAppSelector } from '@src/hooks/appRedux';
import React from 'react';
import ProfilePopupPresenter from './ProfilePopupPresenter';

interface ProfilePopupContainerProps {
	profileSheetVisible: boolean;
	setProfileSheetVisible: (param: boolean) => void;
}

const ProfilePopupContainer = ({
	profileSheetVisible,
	setProfileSheetVisible,
}: ProfilePopupContainerProps): JSX.Element => {
	const { profilePicture, shortUserAbout, userName, dept, grade, status, links, userAbout } = useAppSelector(
		(state) => state.user.userInfo
	);

	return (
		<ProfilePopupPresenter
			profileSheetVisible={profileSheetVisible}
			setProfileSheetVisible={setProfileSheetVisible}
			profilePicture={profilePicture}
			shortUserAbout={shortUserAbout}
			userName={userName}
			dept={dept}
			grade={grade}
			status={status}
			links={links}
			userAbout={userAbout}
			tags={['CPA', '토익 스피킹', '면접']}
		/>
	);
};

export default ProfilePopupContainer;
