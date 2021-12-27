import React from 'react';
import { BottomSheet, BottomSheetProps } from 'react-spring-bottom-sheet';
import './index.scss';

interface ProfilePopupPresenterProps {
	profileSheetVisible: boolean;
	setProfileSheetVisible: (param: boolean) => void;
}

const ProfilePopupPresenter = ({
	profileSheetVisible,
	setProfileSheetVisible,
}: ProfilePopupPresenterProps): JSX.Element => {
	return (
		<BottomSheet open={profileSheetVisible} onDismiss={() => setProfileSheetVisible(false)}>
			<div className="profile-bottom-sheet-container">
				<div>hi!</div>
			</div>
		</BottomSheet>
	);
};

export default ProfilePopupPresenter;
