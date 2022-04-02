/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { Box, ImageList, ImageListItem } from '@material-ui/core';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React from 'react';
import { getProfileImgs } from '../shared/utils/profileImg';

const EditProfileImageModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	return (
		<Modal open={open} onClose={onClose}>
			<>
				<Box>프로필 이미지</Box>
				<ImageList cols={3} gap={16}>
					{getProfileImgs().map((item: string) => {
						return (
							<ImageListItem key={item}>
								<img src={require(`@src/assets/img/profileImg/${item}`).default} alt={item} />
							</ImageListItem>
						);
					})}
				</ImageList>
			</>
		</Modal>
	);
};

export default EditProfileImageModal;
