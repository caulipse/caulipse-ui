import useWindowDimensions from '@src/hooks/useWindowDimensions';
import React, { useCallback, useMemo } from 'react';
import { BottomSheet, BottomSheetProps } from 'react-spring-bottom-sheet';
import './index.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProfileLink from './profileLink/ProfileLink';

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
	const { width: windowWidth } = useWindowDimensions();

	const Content = () => (
		<div className="profile-bottom-sheet-container">
			<img className="profile-bottom-sheet-profile-img" src={profilePicture} alt="프로필 이미지" />
			<div className="profile-bottom-sheet-name">{userName}</div>
			<div className="profile-bottom-sheet-short-about">{shortUserAbout}</div>
			<div className="profile-bottom-sheet-tag-container">
				{tags?.map((tagItem, tagIndex) => (
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
				{links?.map((linkItem) => (
					<ProfileLink key={linkItem} link={linkItem} />
				))}
			</div>
			<div className="profile-bottom-sheet-divider" />
			<div className="profile-bottom-sheet-about-title">저는요..</div>
			<div className="profile-bottom-sheet-about-text">{userAbout}</div>
		</div>
	);

	if (windowWidth > 1024) {
		return (
			<Popup open={profileSheetVisible} onClose={() => setProfileSheetVisible(false)} position="center center">
				<Content />
			</Popup>
		);
	}
	return (
		<BottomSheet open={profileSheetVisible} onDismiss={() => setProfileSheetVisible(false)}>
			<Content />
		</BottomSheet>
	);
};

export default ProfilePopupPresenter;
