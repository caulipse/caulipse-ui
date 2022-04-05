/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { Box, Button, ImageList, ImageListItem } from '@material-ui/core';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import globalState from '@src/state';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { getProfileImgs } from '../shared/utils/profileImg';
import './editProfileImageModal.scss';

const EditProfileImageModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [selectedImage, setSelectedImage] = useState<string>('');
	const [state] = useAtom(globalState);
	const callback = state.modal.params?.callback;

	const handleClick = () => {
		callback(selectedImage);
		onClose(false);
	};

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
								<Button
									className={classNames('edit-profile-image-modal-img-con', {
										'edit-profile-image-modal-img-con-selected': item === selectedImage,
									})}
									onClick={() => setSelectedImage(item)}
								>
									<img
										className="edit-profile-image-modal-img"
										src={item ?? require(`@src/assets/img/profileImg/${item}`).default}
										alt={item}
									/>
								</Button>
							</ImageListItem>
						);
					})}
				</ImageList>
				<CommonButton
					className="edit-profile-image-modal-cta-btn"
					type={ButtonTypeEnum.secondary}
					title="확인"
					onClick={handleClick}
				/>
			</Box>
		</Modal>
	);
};

export default EditProfileImageModal;
