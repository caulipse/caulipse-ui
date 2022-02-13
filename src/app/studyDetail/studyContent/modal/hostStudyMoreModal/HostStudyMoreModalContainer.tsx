import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import HostStudyMoreModalPresenter from './HostStudyMoreModalPresenter';

const HostStudyMoreModalContainer = ({
	open,
	onClose,
	setOpenStudyDeleteModal,
}: IModalContainerCommonProps & { setOpenStudyDeleteModal: (params: boolean) => void }): JSX.Element => {
	const onClickChange = () => {
		// TODO
		// 모집글 변경 Flow 연결
		console.info('HostStudyMoreModalContainer');
	};

	const onClickDelete = () => {
		onClose(false);
		setOpenStudyDeleteModal(true);
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
