import './index.scss';
import React from 'react';
import { getProfileImgs } from '@src/app/shared/utils/profileImg';
import defaultImg from '@src/assets/img/profileImg/default.svg';
import classNames from 'classnames';
import useModal from '@src/hooks/modal/useModal';
import { ButtonBase } from '@material-ui/core';
import ModalKeyEnum from '../modal/enum';

interface ProfileImageProps {
	userId: string;
	userImage: string;
	width: number;
	height: number;
	className?: string;
}

const ProfileImage = ({ userId, userImage, width, height, className = '' }: ProfileImageProps): JSX.Element => {
	const { openModal } = useModal();

	const showProfile = () => {
		openModal(ModalKeyEnum.UserProfileModal, { userId });
	};

	return (
		<ButtonBase onClick={showProfile}>
			<img
				style={{ borderRadius: width / 2 }}
				className={classNames('profile-img', className)}
				src={
					getProfileImgs().includes(userImage) ? require(`@src/assets/img/profileImg/${userImage}`).default : defaultImg
				}
				width={width}
				height={height}
				alt={userImage ?? ''}
			/>
		</ButtonBase>
	);
};

export default ProfileImage;
