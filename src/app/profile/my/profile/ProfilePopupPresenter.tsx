import React, { useCallback, useMemo } from 'react';
import { BottomSheet, BottomSheetProps } from 'react-spring-bottom-sheet';
import './index.scss';

interface ProfilePopupPresenterProps {
	profileSheetVisible: boolean;
	setProfileSheetVisible: (param: boolean) => void;
	profilePicture: string;
	shortUserAbout: string;
	userName: string;
	dept: string;
	grade: number;
	status: string;
	links: string[];
	userAbout: string;
}

const ProfilePopupPresenter = ({
	profileSheetVisible,
	setProfileSheetVisible,
	profilePicture,
	shortUserAbout,
	userName,
	dept,
	grade,
	status,
	links,
	userAbout,
}: ProfilePopupPresenterProps): JSX.Element => {
	return (
		<BottomSheet open={profileSheetVisible} onDismiss={() => setProfileSheetVisible(false)}>
			<div className="profile-bottom-sheet-container">
				<img className="profile-bottom-sheet-profile-img" src={profilePicture} alt="프로필 이미지" />
				<div className="profile-bottom-sheet-name">{userName}</div>
				<div className="profile-bottom-sheet-short-about">{shortUserAbout}</div>
			</div>
		</BottomSheet>
	);
};

export default ProfilePopupPresenter;
