import React, { useState } from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import { CategoryDepthEnum } from '@src/types';
import EditCategoryModalPresenter from './EditCategoryModalPresenter';

const EditCategoryModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [value, setValue] = useState({ MAIN: '', SUB: '' });
	const [step, setStep] = useState(0);

	const onClick = () => {
		// TODO
		// 카테고리 수정 API 연동
		console.info('EditCategoryModalContainer');
	};

	const onClickValue = (category: string, key: CategoryDepthEnum) => {
		setValue({ ...value, [key]: category });
		if (step === 0) setStep((prev) => prev + 1);
	};

	const handleClose = () => {
		onClose(false);
		setStep(0);
	};

	return (
		<EditCategoryModalPresenter
			step={step}
			setStep={setStep}
			open={open}
			onClose={handleClose}
			onClick={onClick}
			value={value}
			onClickValue={onClickValue}
		/>
	);
};

export default EditCategoryModalContainer;
