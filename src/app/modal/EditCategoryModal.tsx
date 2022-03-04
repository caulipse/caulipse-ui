import React, { useState } from 'react';
import './editCategoryModal.scss';
import { Container, Grid } from '@material-ui/core';
import Modal from '@common/modal/Modal';
import Chip from '@common/chip/Chip';
import CloseButton from '@src/components/common/iconButton/CloseButton';
import BackIcon from '@src/components/common/iconButton/BackButton';
import CommonButton from '@common/button/CommonButton';
import { IModalContainerCommonProps } from '@common/modal/types';
import '@common/modal/common.scss';
import categories from '@src/const';
import { ICategoryType, CategoryDepthEnum } from '@src/types';

const EditCategoryModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [value, setValue] = useState({ MAIN: '', SUB: '' });
	const [step, setStep] = useState(0);

	const onClick = () => {
		// TODO
		// 카테고리 수정 API 연동
	};

	const onClickValue = (category: string, key: CategoryDepthEnum) => {
		setValue({ ...value, [key]: category });
		if (step === 0) setStep((prev) => prev + 1);
	};

	const CategoryChip = (category: ICategoryType) => {
		const { label, categoryDepth } = category;
		const handleClick = () => {
			onClickValue(label, categoryDepth);
		};
		return (
			<Grid key={label} item xs={4} className="modal-chip-item">
				<Chip label={label} onClick={handleClick} selected={label === value[categoryDepth]} />
			</Grid>
		);
	};

	const Step0Content = () => (
		<Container>
			<Container className="modal-title-container edit-category-modal-title-container">
				<span>카테고리 수정</span>
				<CloseButton onClick={() => onClose(false)} />
			</Container>
			<Grid container spacing={1}>
				{categories.map((category) => {
					return <CategoryChip key={category.label} label={category.label} categoryDepth={CategoryDepthEnum.MAIN} />;
				})}
			</Grid>
		</Container>
	);

	const Step1Content = () => (
		<>
			<Container>
				<Container className="modal-title-container">
					<BackIcon onClick={() => setStep(step - 1)} />
					<span>{value.MAIN}</span>
					<CloseButton onClick={() => onClose(false)} />
				</Container>
				<Grid container spacing={1}>
					{categories
						.filter((category) => category.label === value.MAIN)[0]
						.subCategories.map((category) => {
							return <CategoryChip key={category.label} label={category.label} categoryDepth={CategoryDepthEnum.SUB} />;
						})}
				</Grid>
			</Container>
			<Container>
				<CommonButton title="변경사항 적용" onClick={onClick} disabled={value.SUB === ''} />
			</Container>
		</>
	);

	return (
		<Modal open={open} onClose={onClose} height="40.438rem">
			<Container className="modal-root-container modal-space-between-container">
				{step === 0 ? <Step0Content /> : <Step1Content />}
			</Container>
		</Modal>
	);
};

export default EditCategoryModal;
