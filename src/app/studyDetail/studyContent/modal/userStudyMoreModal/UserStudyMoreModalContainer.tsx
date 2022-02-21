import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import UserStudyMoreModalPresenter from './UserStudyMoreModalPresenter';

const UserStudyMoreModalContainer = ({
	open,
	onClose,
	setOpenReportModal,
	setOpenCancelModal,
}: IModalContainerCommonProps & {
	setOpenReportModal: (params: boolean) => void;
	setOpenCancelModal: (params: boolean) => void;
}): JSX.Element => {
	const onClickReport = () => {
		onClose(false);
		setOpenReportModal(true);
	};
	const onClickCancel = () => {
		onClose(false);
		setOpenCancelModal(true);
	};
	return (
		<UserStudyMoreModalPresenter
			open={open}
			onClose={onClose}
			onClickReport={onClickReport}
			onClickCancel={onClickCancel}
		/>
	);
};

export default UserStudyMoreModalContainer;
