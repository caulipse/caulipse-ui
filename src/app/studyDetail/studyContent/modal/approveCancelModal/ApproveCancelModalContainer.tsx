import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import ApproveCancelModalPresenter from './ApproveCancelModalPresenter';

const ApproveCancelModalContainer = ({
	open,
	onClose,
	nickname,
}: IModalContainerCommonProps & { nickname: string }): JSX.Element => {
	const onClick = () => {
		// TODO
		// 수락 취소  API 연동
		console.info('ApproveCancelModalContainer');
	};
	return <ApproveCancelModalPresenter open={open} onClose={onClose} onClick={onClick} nickname={nickname} />;
};

export default ApproveCancelModalContainer;
