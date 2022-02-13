import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import StudyDeleteModalPresenter from './StudyDeleteModalPresenter';

const StudyDeleteModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const onClick = () => {
		// TODO
		// 모집글 삭제 API 연동
		console.info('StudyDeleteModalContainer');
	};
	return <StudyDeleteModalPresenter open={open} onClose={onClose} onClick={onClick} />;
};

export default StudyDeleteModalContainer;
