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
import { useAtom } from 'jotai';
import { userState as globalUserState } from '@src/state';
import defaultImg from '@src/assets/img/profileImg/default.svg';

interface MyHeaderPresenterProps {
	userProfile: UserProfile;
	userEmail: string;
}

const MyHeaderPresenter = ({ userProfile, userEmail }: MyHeaderPresenterProps): JSX.Element => {
	const history = useHistory();
	const [userState] = useAtom(globalUserState);
	const { openModal } = useModal();

	const showProfileSheet = () => {
		openModal(ModalKeyEnum.UserProfileModal, { userId: userState.userId });
	};

	return (
		<Box className="my-header-container">
			<Box className="my-header-content-container">
				<Box className="my-header-body-container">
					<ButtonBase className="my-header-profile-photo-btn" onClick={showProfileSheet}>
						<img
							className="my-header-profile-photo"
							src={userProfile.image ? require(`@src/assets/img/profileImg/${userProfile.image}`).default : defaultImg}
							alt={userProfile.image ?? ''}
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
