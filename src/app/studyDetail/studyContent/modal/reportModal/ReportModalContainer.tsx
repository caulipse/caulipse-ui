import React, { useState } from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import ReportModalPresenter from './ReportModalPresenter';

const ReportModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	// FIXME: key 값은 변경할 예정임
	const [value, setValue] = useState('0');
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
