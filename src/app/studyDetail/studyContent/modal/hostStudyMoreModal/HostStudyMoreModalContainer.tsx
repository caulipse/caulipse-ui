import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import HostStudyMoreModalPresenter from './HostStudyMoreModalPresenter';

const HostStudyMoreModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const onClickChange = () => {
		// TODO
		// 모집글 변경 Flow 연결
		console.info('HostStudyMoreModalContainer');
	};

	const onClickDelete = () => {
		// TODO
		// 모집글 삭제 Flow 연결
		console.info('HostStudyMoreModalContainer');
	};
	return (
		<HostStudyMoreModalPresenter
			open={open}
			onClose={onClose}
			onClickChange={onClickChange}
			onClickDelete={onClickDelete}
		/>
	);
};

export default HostStudyMoreModalContainer;
