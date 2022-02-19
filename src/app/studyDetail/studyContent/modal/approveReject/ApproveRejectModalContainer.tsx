import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import ApproveRejectModalPresenter from './ApproveRejectModalPresenter';

const ApproveRejectModalContainer = ({
	open,
	onClose,
	nickname,
}: IModalContainerCommonProps & { nickname: string }): JSX.Element => {
	const onClick = () => {
		// TODO
		// 수락 취소  API 연동
		console.info('ApproveRejectModalContainer');
	};
	return <ApproveRejectModalPresenter open={open} onClose={onClose} onClick={onClick} nickname={nickname} />;
};

export default ApproveRejectModalContainer;
