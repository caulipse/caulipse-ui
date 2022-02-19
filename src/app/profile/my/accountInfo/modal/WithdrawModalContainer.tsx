import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import WithdrawModalPresenter from './WithdrawModalPresenter';

const WithdrawModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const onClick = () => {
		// TODO
		// 탈퇴 API 연동
		console.info('WithdrawModalContainer');
	};
	return <WithdrawModalPresenter open={open} onClose={onClose} onClick={onClick} />;
};

export default WithdrawModalContainer;
