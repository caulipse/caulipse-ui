import React, { useState } from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import StudySortModalPresenter from './StudySortModalPresenter';

const StudySortModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [value, setValue] = useState('createdAt:desc');
	const onClick = () => {
		// TODO 정렬 API 연동
		console.info('StudySortModalContainer');
		onClose(false);
	};
	const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setValue((evt.target as HTMLInputElement).value);
	};
	return <StudySortModalPresenter open={open} onClose={onClose} onClick={onClick} onChange={onChange} value={value} />;
};

export default StudySortModalContainer;
