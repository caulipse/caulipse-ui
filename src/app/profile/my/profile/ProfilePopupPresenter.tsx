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
	tags: string[];
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
	tags,
}: ProfilePopupPresenterProps): JSX.Element => {
	return (
		<BottomSheet open={profileSheetVisible} onDismiss={() => setProfileSheetVisible(false)}>
			<div className="profile-bottom-sheet-container">
				<img className="profile-bottom-sheet-profile-img" src={profilePicture} alt="프로필 이미지" />
				<div className="profile-bottom-sheet-name">{userName}</div>
				<div className="profile-bottom-sheet-short-about">{shortUserAbout}</div>
				<div className="profile-bottom-sheet-tag-container">
					{tags.map((tagItem, tagIndex) => (
						<div key={tagItem} className={`profile-bottom-sheet-tag-item ${tagIndex === 0 ? '' : 'ml12'}`}>
							{tagItem}
						</div>
					))}
				</div>
				<div className="profile-bottom-sheet-divider" />
				<div className="profile-bottom-sheet-hashtag-container">
					<div className="profile-bottom-sheet-hashtag-bold-text">
						#{dept} <span className="profile-bottom-sheet-hashtag-regular-text">전공</span>&nbsp;
					</div>
					<div className="profile-bottom-sheet-hashtag-bold-text">#{grade}학년&nbsp;</div>
					<div className="profile-bottom-sheet-hashtag-bold-text">#{status}</div>
				</div>
				<div className="profile-bottom-sheet-link-container">
					{links.map((linkItem) => (
						<div key={linkItem}>{linkItem}</div>
					))}
				</div>
				<div className="profile-bottom-sheet-divider" />
				<div className="profile-bottom-sheet-about-title">저는요..</div>
				<div className="profile-bottom-sheet-about-text">{userAbout}</div>
			</div>
		</BottomSheet>
	);
};

export default ProfilePopupPresenter;
