import React from 'react';
import HostStudyMoreModalPresenter from './HostStudyMoreModalPresenter';

interface IHostStudyMoreModalContainerProps {
	open: boolean;
	onClose: (param: boolean) => void;
}

const HostStudyMoreModalContainer = ({ open, onClose }: IHostStudyMoreModalContainerProps): JSX.Element => {
	const onClickChange = () => {
		// TODO
		// 모집글 변경 Flow 연결
		console.info('HostStudyMoreModalContainer');
	};

	const onClickDelete = () => {
		// TODO
		// 모집글 삭제 Flow 연결
		console.info('HostStudyMoreModalContainer');
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
