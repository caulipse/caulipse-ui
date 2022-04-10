import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import React from 'react';
import Popup from 'reactjs-popup';

const StudySearchModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	return (
		<Popup open={open} onClose={() => onClose(false)} position="top center">
			<div>studysearch</div>
		</Popup>
	);
};

export default StudySearchModal;
