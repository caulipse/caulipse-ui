import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import UserStudyMoreModalPresenter from './UserStudyMoreModalPresenter';

const UserStudyMoreModalContainer = ({
	open,
	onClose,
	setOpenReportModal,
}: IModalContainerCommonProps & { setOpenReportModal: (params: boolean) => void }): JSX.Element => {
	const onClick = () => {
		onClose(false);
		setOpenReportModal(true);
	};
	return <UserStudyMoreModalPresenter open={open} onClose={onClose} onClick={onClick} />;
};

export default UserStudyMoreModalContainer;
