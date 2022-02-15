import React, { ChangeEvent, useState, useEffect } from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import MyCategoryModalPresenter from './MyCategoryModalPresenter';

const MyCategoryModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	// TODO
	// 관심 카테고리 조회 API 연동
	const [value, setValue] = useState(['어학', '자격증', '프로그래밍']);

	const onClick = () => {
		// TODO
		// 관심 카테고리 수정 API 연동
		console.info('MyCategoryModalContainer');
	};

	const onChangeValue = (category: string) => {
		if (value.includes(category)) {
			setValue(value.filter((item) => item !== category));
		} else {
			setValue(value.concat(category));
		}
	};

	return (
		<MyCategoryModalPresenter
			open={open}
			onClose={onClose}
			onClick={onClick}
			value={value}
			onChangeValue={onChangeValue}
		/>
	);
};

export default MyCategoryModalContainer;
