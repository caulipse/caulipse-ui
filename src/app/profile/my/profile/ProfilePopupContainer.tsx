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
	return (
		<ProfilePopupPresenter profileSheetVisible={profileSheetVisible} setProfileSheetVisible={setProfileSheetVisible} />
	);
};

export default ProfilePopupContainer;
