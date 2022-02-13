import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import UserStudyMoreModalPresenter from './UserStudyMoreModalPresenter';

const UserStudyMoreModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const onClick = () => {
		// TODO
		console.info('UserStudyMoreModalContainer');
	};
	return <UserStudyMoreModalPresenter open={open} onClose={onClose} onClick={onClick} />;
};

export default UserStudyMoreModalContainer;
