import React, { useRef, useState } from 'react';
import { IoClose, IoSettingsSharp, IoChevronForwardOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import './index.scss';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import ProfilePopupContainer from '../profile/ProfilePopupContainer';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';

interface MyHeaderPresenterProps {
	userName: string;
}

const MyHeaderPresenter = ({ userName }: MyHeaderPresenterProps): JSX.Element => {
	const history = useHistory();
	const sheetRef = useRef<BottomSheetRef>(null);
	const [profileSheetVisible, setProfileSheetVisible] = useState<boolean>(false);

	const showProfileSheet = () => {
		setProfileSheetVisible(true);
	};
	const closeProfileSheet = () => {
		setProfileSheetVisible(false);
	};

	return (
		<div className="my-header-container">
			<div className="my-header-icons-container">
				<button type="button" onClick={() => history.goBack()}>
					<IoClose size={24} fill="#f7f7f7" />
				</button>
				<button type="button">
					<IoSettingsSharp size={24} fill="#f7f7f7" />
				</button>
			</div>
			<img className="my-header-profile-photo" src={sampleImgUrl} alt="사용자 프로필 사진" />
			<div className="my-header-user-name">
				{userName}
				<span className="my-header-user-name-suffix"> 님</span>
			</div>
			<button type="button" onClick={showProfileSheet}>
				<div className="my-header-my-profile-btn-text">내 프로필 보기 {'>'}</div>
			</button>
			<ProfilePopupContainer
				profileSheetVisible={profileSheetVisible}
				setProfileSheetVisible={setProfileSheetVisible}
			/>
		</div>
	);
};

export default MyHeaderPresenter;
