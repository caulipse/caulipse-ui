import { Box } from '@material-ui/core';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React from 'react';
import { IoArrowBack, IoClose } from 'react-icons/io5';
import './studySearchModal.scss';

const StudySearchModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element | false => {
	return (
		open && (
			<Box className="study-search-modal-overlay" onClick={() => onClose(false)}>
				<Box className="study-search-modal-header-con">
					<IoClose className="study-search-modal-icon" color="#fff" onClick={() => onClose(false)} />
					<Box className="study-search-modal-header-title">스터디 검색</Box>
					<Box className="study-search-modal-icon" />
				</Box>
			</Box>
		)
	);
};

export default StudySearchModal;
