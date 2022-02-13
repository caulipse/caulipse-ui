import React from 'react';
import UserStudyMoreModalPresenter from './UserStudyMoreModalPresenter';

interface IUserStudyMoreModalContainerProps {
	open: boolean;
	onClose: (param: boolean) => void;
}

const UserStudyMoreModalContainer = ({ open, onClose }: IUserStudyMoreModalContainerProps): JSX.Element => {
	const onClick = () => {
		// TODO
		console.info('UserStudyMoreModalContainer');
	};
	return <UserStudyMoreModalPresenter open={open} onClose={onClose} onClick={onClick} />;
};

export default UserStudyMoreModalContainer;
