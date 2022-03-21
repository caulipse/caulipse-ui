import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import './index.scss';
import 'react-spring-bottom-sheet/dist/style.css';
import { UserProfile } from '@src/api/types';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@src/components/common/modal/enum';
import { Box, ButtonBase } from '@material-ui/core';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';
const exampleId = '0357501b-8887-42e1-9dde-8344e0de60b0';

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
		<Box className="my-header-container">
			<Box className="my-header-content-container">
				<Box className="my-header-row-container">
					<ButtonBase className="my-header-profile-photo-btn" onClick={showProfileSheet}>
						<img className="my-header-profile-photo" src={sampleImgUrl} alt="사용자 프로필 사진" />
					</ButtonBase>
					<Box className="my-header-text-container">
						<Box className="my-header-user-name">
							{userProfile.userName}
							<span className="my-header-user-name-suffix"> 님</span>
						</Box>
						<Box className="my-header-user-email">example@cau.ac.kr</Box>
					</Box>
					<ButtonBase className="my-header-setting-container" onClick={() => history.push('/profile/edit')}>
						<IoSettingsSharp className="my-header-setting-icon" fill="#ffffff" />
					</ButtonBase>
				</Box>
			</Box>
		</Box>
	);
};

export default MyHeaderPresenter;
