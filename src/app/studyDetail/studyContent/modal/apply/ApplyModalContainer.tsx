import React, { ChangeEvent, useState, useEffect } from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import ApplyModalPresenter from './ApplyModalPresenter';

const ApplyModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [disabled, setDisabled] = useState(false);
	const [value, setValue] = useState('시와 별 이름을 가을로 위로무에 하나에 있습니다. 새겨지는 같이 어머니 있습니다.');
	const [isPublic, setIsPublic] = useState(false);

	const onClick = () => {
		// TODO
		// 스터디 신청 API 연동
		console.info('ApplyModalContainer');
	};

	const onChangeValue = (evt: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(evt.target.value);
	};

	const onChangeIsPublic = (evt: ChangeEvent<HTMLInputElement>) => {
		setIsPublic(evt.target.checked);
	};

	useEffect(() => {
		setDisabled(value.length < 5);
	}, [value]);

	return (
		<ApplyModalPresenter
			open={open}
			onClose={onClose}
			onClick={onClick}
			isPublic={isPublic}
			disabled={disabled}
			value={value}
			onChangeValue={onChangeValue}
			onChangeIsPublic={onChangeIsPublic}
		/>
	);
};

export default ApplyModalContainer;
