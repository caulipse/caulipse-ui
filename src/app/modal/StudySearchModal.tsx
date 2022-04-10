import { Box } from '@material-ui/core';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React from 'react';
import './studySearchModal.scss';

const StudySearchModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element | false => {
	return (
		open && (
			<Box className="study-search-modal-overlay" onClick={() => onClose(false)}>
				<div>studysearch</div>
			</Box>
		)
	);
};

export default StudySearchModal;
