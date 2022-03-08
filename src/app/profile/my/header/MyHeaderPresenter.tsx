import React, { useRef, useState } from 'react';
import { IoClose, IoSettingsSharp, IoChevronForwardOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import './index.scss';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { UserProfile } from '@src/api/types';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@src/components/common/modal/enum';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';
const exampleId = '00fe16f3-5b45-4f25-889c-caa6c5b8e228';

interface MyHeaderPresenterProps {
	userProfile: UserProfile;
}

const MyHeaderPresenter = ({ userProfile }: MyHeaderPresenterProps): JSX.Element => {
	const history = useHistory();
	const { openModal } = useModal();

	const showProfileSheet = () => {
		openModal(ModalKeyEnum.UserProfileModal, { userId: exampleId });
	};

	return (
		<div className="my-header-container">
			<div className="my-header-icons-container">
				<button type="button" onClick={() => history.goBack()}>
					<IoClose size={24} fill="#f7f7f7" />
				</button>
				<button type="button" onClick={() => history.push('/profile/edit')}>
					<IoSettingsSharp size={24} fill="#f7f7f7" />
				</button>
			</div>
			<img className="my-header-profile-photo" src={sampleImgUrl} alt="사용자 프로필 사진" />
			<div className="my-header-user-name">
				{userProfile.userName}
				<span className="my-header-user-name-suffix"> 님</span>
			</div>
			<button type="button" onClick={showProfileSheet}>
				<div className="my-header-my-profile-btn-text">내 프로필 보기 {'>'}</div>
			</button>
		</div>
	);
};

export default MyHeaderPresenter;
