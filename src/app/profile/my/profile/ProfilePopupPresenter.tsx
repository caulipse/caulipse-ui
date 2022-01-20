import useWindowDimensions from '@src/hooks/useWindowDimensions';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { BottomSheet, BottomSheetProps, BottomSheetRef } from 'react-spring-bottom-sheet';
import './index.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProfileLink from './profileLink/ProfileLink';

const BOTTOMSHEET_MINHEIGHT = 350;
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
	const { width: windowWidth, height: windowHeight } = useWindowDimensions();
	const bottomSheetRef = useRef<BottomSheetRef>(null);
	const [bottomSheetHeight, setBottomSheetHeight] = useState<number>(334);

	const closeProfileSheet = () => {
		setProfileSheetVisible(false);
		setBottomSheetHeight(BOTTOMSHEET_MINHEIGHT);
	};

	const Content = () => {
		const handleScroll = (e: React.UIEvent<HTMLElement>) => {
			if (e.currentTarget.scrollTop > 0) {
				setBottomSheetHeight(windowHeight - 102);
			} else {
				setBottomSheetHeight(BOTTOMSHEET_MINHEIGHT);
			}
		};

		return (
			<div className="profile-bottom-sheet-container" style={{ height: bottomSheetHeight }} onScroll={handleScroll}>
				<div className="profile-bottom-sheet-top-short-about">{shortUserAbout}</div>
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
					{links?.map((linkItem, linkIndex) => (
						<div key={linkItem} className={linkIndex === 0 ? '' : 'mt8'}>
							<ProfileLink link={linkItem} />
						</div>
					))}
				</div>
				<div className="profile-bottom-sheet-divider" />
				<div className="profile-bottom-sheet-about-title">저는요..</div>
				<div className="profile-bottom-sheet-about-text">{userAbout}</div>
				<button type="button" className="profile-bottom-sheet-close-cta-btn" onClick={closeProfileSheet}>
					닫기
				</button>
			</div>
		);
	};

	if (windowWidth > 1024) {
		return (
			<Popup open={profileSheetVisible} onClose={closeProfileSheet} position="center center">
				<Content />
			</Popup>
		);
	}
	return (
		<BottomSheet
			ref={bottomSheetRef}
			open={profileSheetVisible}
			onDismiss={closeProfileSheet}
		>
			<Content />
		</BottomSheet>
	);
};

export default ProfilePopupPresenter;
