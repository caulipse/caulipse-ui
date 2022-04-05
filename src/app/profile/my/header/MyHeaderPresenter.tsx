/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import './index.scss';
import 'react-spring-bottom-sheet/dist/style.css';
import { UserProfile } from '@src/api/types';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@src/components/common/modal/enum';
import { Box, ButtonBase } from '@material-ui/core';

const exampleId = '0357501b-8887-42e1-9dde-8344e0de60b0';

interface MyHeaderPresenterProps {
	userProfile: UserProfile;
	userEmail: string;
}

const MyHeaderPresenter = ({ userProfile, userEmail }: MyHeaderPresenterProps): JSX.Element => {
	const history = useHistory();
	const { openModal } = useModal();

	const showProfileSheet = () => {
		openModal(ModalKeyEnum.UserProfileModal, { userId: exampleId });
	};

	return (
		<Box className="my-header-container">
			<Box className="my-header-content-container">
				<Box className="my-header-body-container">
					<ButtonBase className="my-header-profile-photo-btn" onClick={showProfileSheet}>
						<img
							className="my-header-profile-photo"
							src={userProfile.image ?? require(`@src/assets/img/profileImg/${userProfile.image}`).default}
							alt={userProfile.image}
						/>
					</ButtonBase>
					<Box className="my-header-row-container">
						<Box className="my-header-text-container">
							<Box className="my-header-user-name">
								{userProfile.userName}
								<span className="my-header-user-name-suffix"> 님</span>
							</Box>
							<Box className="my-header-user-email">{userEmail}</Box>
						</Box>
						<ButtonBase className="my-header-setting-container" onClick={() => history.push('/profile/edit')}>
							<IoSettingsSharp className="my-header-setting-icon" fill="#ffffff" />
						</ButtonBase>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MyHeaderPresenter;
