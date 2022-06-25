/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable jsx-a11y/img-redundant-alt */
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import React from 'react';
import './userProfileModal.scss';
import 'reactjs-popup/dist/index.css';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import useModal from '@src/hooks/modal/useModal';
import Loader from '@src/components/common/loader/Loader';
import defaultImg from '@src/assets/img/profileImg/default.svg';
import ProfileLink from '../profile/my/profile/profileLink/ProfileLink';
import { getMainCategoryLabel } from '../shared/utils/category';
import { getProfileImgs } from '../shared/utils/profileImg';

interface UserProfileModalProps extends IModalContainerCommonProps {
	params: any;
}

const UserProfileModal = ({ open, onClose, params }: UserProfileModalProps): JSX.Element => {
	const { width: windowWidth } = useWindowDimensions();
	const isPopup = windowWidth > 1024;
	const userId = params?.userId;
	const { closeModal } = useModal();

	const fetchedData = useFetchUserProfile(userId);
	const userProfile = fetchedData.data?.userProfile;

	const Content = () => {
		return (
			<div className="profile-bottom-sheet-container">
				<img
					className={`profile-bottom-sheet-profile-img${isPopup ? '-popup' : ''}`}
					src={
						getProfileImgs().includes(userProfile?.image ?? '')
							? require(`@src/assets/img/profileImg/${userProfile?.image}`).default
							: defaultImg
					}
					alt={userProfile?.image ?? ''}
				/>
				<div className="profile-bottom-sheet-name">{userProfile?.userName}</div>
				<div className="profile-bottom-sheet-short-about">{userProfile?.bio}</div>
				<div className="profile-bottom-sheet-tag-container">
					{userProfile?.categories?.map((tagItem, tagIndex) =>
						tagItem ? (
							<div key={tagItem} className={`profile-bottom-sheet-tag-item ${tagIndex === 0 ? '' : 'ml12'}`}>
								{getMainCategoryLabel(Number(tagItem))}
							</div>
						) : (
							<div />
						)
					)}
				</div>
				<div className="profile-bottom-sheet-divider" />
				<div className="profile-bottom-sheet-hashtag-container">
					<div className="profile-bottom-sheet-hashtag-bold-text">#{userProfile?.dept}</div>
					<div className="profile-bottom-sheet-hashtag-bold-text">#{userProfile?.grade}학년&nbsp;</div>
					<div className="profile-bottom-sheet-hashtag-bold-text">#{userProfile?.onBreak ? '휴학중' : '재학중'}</div>
				</div>
				<div className="profile-bottom-sheet-link-container">
					{userProfile?.links?.map((linkItem, linkIndex) => {
						if (linkItem) {
							return (
								<div key={linkItem} className={linkIndex === 0 ? '' : 'mt8'}>
									<ProfileLink link={linkItem} />
								</div>
							);
						}
						return <div key={linkItem} />;
					})}
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
