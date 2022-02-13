import React from 'react';
import UserStudyMoreModalPresenter from './UserStudyMoreModalPresenter';
import { IModalContainerCommonProps } from '@common/modal/types';

const UserStudyMoreModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const onClick = () => {
		// TODO
		console.info('UserStudyMoreModalContainer');
	};
	return <UserStudyMoreModalPresenter open={open} onClose={onClose} onClick={onClick} />;
};

export default UserStudyMoreModalContainer;
