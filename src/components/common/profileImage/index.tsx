import './index.scss';
import React from 'react';
import { getProfileImgs } from '@src/app/shared/utils/profileImg';
import defaultImg from '@src/assets/img/profileImg/default.svg';
import classNames from 'classnames';

interface ProfileImageProps {
	userId: string;
	userImage: string;
	width: number;
	height: number;
	className?: string;
}

const ProfileImage = ({ userId, userImage, width, height, className = '' }: ProfileImageProps): JSX.Element => {
	return (
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
	);
};

export default ProfileImage;
