import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import ApplyCancelModalPresenter from './ApplyCancelModalPresenter';

const ApplyCancelModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const onClick = () => {
		// TODO
		// 신청 취소 API 연동
		console.info('ApplyCancelModalContainer');
	};
	return <ApplyCancelModalPresenter open={open} onClose={onClose} onClick={onClick} />;
};

export default ApplyCancelModalContainer;
