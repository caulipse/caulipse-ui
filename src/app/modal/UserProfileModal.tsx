import useWindowDimensions from '@src/hooks/useWindowDimensions';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { BottomSheet, BottomSheetProps, BottomSheetRef } from 'react-spring-bottom-sheet';
import './userProfileModal.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import useModal from '@src/hooks/modal/useModal';
import Loader from '@src/components/common/loader/Loader';
import ProfileLink from '../profile/my/profile/profileLink/ProfileLink';

const BOTTOMSHEET_MINHEIGHT = 350;
interface UserProfileModalProps extends IModalContainerCommonProps {
	params: any;
}

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';
const shortUserAbout = 'shortUserAbout';
const tags = ['tag1', 'tag2', 'tag3'];

const UserProfileModal = ({ open, onClose, params }: UserProfileModalProps): JSX.Element => {
	const { width: windowWidth, height: windowHeight } = useWindowDimensions();
	const [bottomSheetHeight, setBottomSheetHeight] = useState<number>(334);
	const isPopup = windowWidth > 1024;
	const userId = params?.userId;
	const { closeModal } = useModal();

	const fetchedData = useFetchUserProfile(userId);
	const userProfile = fetchedData.data?.userProfile;

	const Content = () => {
		const handleScroll = (e: React.UIEvent<HTMLElement>) => {
			if (isPopup) return;
			if (e.currentTarget.scrollTop > 0) {
				setBottomSheetHeight(windowHeight - 102);
			} else {
				setBottomSheetHeight(BOTTOMSHEET_MINHEIGHT);
			}
		};

		return (
			<div
				className="profile-bottom-sheet-container"
				style={{ height: isPopup ? 'auto' : bottomSheetHeight }}
				onScroll={handleScroll}
			>
				<div className="profile-bottom-sheet-top-short-about">{shortUserAbout}</div>
				<img
					className={`profile-bottom-sheet-profile-img${isPopup ? '-popup' : ''}`}
					src={sampleImgUrl}
					alt="프로필 이미지"
				/>
				<div className="profile-bottom-sheet-name">{userProfile?.userName}</div>
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
						#{userProfile?.dept} <span className="profile-bottom-sheet-hashtag-regular-text">전공</span>&nbsp;
					</div>
					<div className="profile-bottom-sheet-hashtag-bold-text">#{userProfile?.grade}학년&nbsp;</div>
					<div className="profile-bottom-sheet-hashtag-bold-text">#{userProfile?.onBreak ? '휴학중' : '재학중'}</div>
				</div>
				<div className="profile-bottom-sheet-link-container">
					{userProfile?.links?.map((linkItem, linkIndex) => (
						<div key={linkItem} className={linkIndex === 0 ? '' : 'mt8'}>
							<ProfileLink link={linkItem} />
						</div>
					))}
				</div>
				<div className="profile-bottom-sheet-divider" />
				<div className="profile-bottom-sheet-about-title">저는요..</div>
				<div className="profile-bottom-sheet-about-text pb150">{userProfile?.userAbout}</div>
				<button type="button" className="profile-bottom-sheet-close-cta-btn" onClick={closeModal}>
					닫기
				</button>
			</div>
		);
	};

	if (fetchedData.isLoading) return <Loader />;

	return (
		<Modal open={open} onClose={onClose}>
			<Content />
		</Modal>
	);
};

export default UserProfileModal;
