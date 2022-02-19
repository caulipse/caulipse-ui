import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import StudyCloseModalPresenter from './StudyCloseModalPresenter';

const StudyCloseModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const onClick = () => {
		// TODO
		// 스터디 마감 API 연동
		console.info('StudyCloseModalContainer');
	};
	// TODO dummy data API 연동
	return <StudyCloseModalPresenter open={open} onClose={onClose} onClick={onClick} current={5} total={7} />;
};

export default StudyCloseModalContainer;
