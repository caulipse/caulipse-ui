import React, { useState } from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import ReportModalPresenter from './ReportModalPresenter';

const ReportModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [value, setValue] = useState('1');
	const onClick = () => {
		// TODO
		// 신고 API 연동
		console.info('ReportModalContainer');
	};
	const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setValue((evt.target as HTMLInputElement).value);
	};
	return <ReportModalPresenter open={open} onClose={onClose} onClick={onClick} onChange={onChange} value={value} />;
};

export default ReportModalContainer;
