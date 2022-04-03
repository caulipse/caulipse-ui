import { Box } from '@material-ui/core';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import './studyPostModal.scss';

const StudyPostModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<>
				<Box className="study-post-modal-header-con">
					<IoClose className="study-post-modal-icon" color="#ffffff" onClick={() => onClose(false)} />
					<Box>Logo</Box>
					<Box className="study-post-modal-icon" />
				</Box>
			</>
		</Modal>
	);
};

export default StudyPostModal;
