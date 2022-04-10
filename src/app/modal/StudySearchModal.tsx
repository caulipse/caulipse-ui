import { Box, TextField } from '@material-ui/core';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React, { useState } from 'react';
import { IoArrowBack, IoClose } from 'react-icons/io5';
import './studySearchModal.scss';

const StudySearchModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element | false => {
	const [searchText, setSearchTest] = useState<string>('');

	return (
		open && (
			<Box className="study-search-modal-overlay" onClick={() => onClose(false)}>
				<Box className="study-search-modal-header-con">
					<IoClose className="study-search-modal-icon" color="#fff" onClick={() => onClose(false)} />
					<Box className="study-search-modal-header-title">스터디 검색</Box>
					<Box className="study-search-modal-icon" />
				</Box>
				<Box className="study-search-modal-input-con">
					<TextField
						className="study-search-modal-input"
						placeholder="어떤 스터디를 찾고 계신가요?"
						value={searchText}
						onChange={(e) => setSearchTest(e.target.value)}
						onClick={(e) => e.stopPropagation()}
						fullWidth
					/>
				</Box>
			</Box>
		)
	);
};

export default StudySearchModal;
