/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { Box, ImageList, ImageListItem } from '@material-ui/core';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { getProfileImgs } from '../shared/utils/profileImg';
import './editProfileImageModal.scss';

const EditProfileImageModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	return (
		<Modal open={open} onClose={onClose}>
			<Box className="edit-profile-image-modal-con">
				<Box className="edit-profile-image-modal-header-con">
					<Box className="edit-profile-image-modal-header-close" />
					<Box className="edit-profile-image-modal-header-title">프로필 이미지</Box>
					<IoClose className="edit-profile-image-modal-header-close" color="#212b36" onClick={() => onClose(false)} />
				</Box>
				<ImageList cols={3}>
					{getProfileImgs().map((item: string) => {
						return (
							<ImageListItem key={item}>
								<Box className="edit-profile-image-modal-img-con">
									<img
										className="edit-profile-image-modal-img"
										src={require(`@src/assets/img/profileImg/${item}`).default}
										alt={item}
									/>
								</Box>
							</ImageListItem>
						);
					})}
				</ImageList>
			</Box>
		</Modal>
	);
};

export default EditProfileImageModal;
