import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import StudyApproveModalPresenter from './StudyApproveModalPresenter';

const StudyApproveModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const onClick = () => {
		// TODO
		// 스터디 마감 API 연동
		console.info('StudyApproveModalContainer');
	};
	// TODO dummy data API 연동
	return <StudyApproveModalPresenter open={open} onClose={onClose} onClick={onClick} current={8} total={8} />;
};

export default StudyApproveModalContainer;
