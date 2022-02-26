import React from 'react';
import './index.scss';
import { Container, Grid } from '@material-ui/core';
import Modal from '@common/modal/Modal';
import Chip from '@common/chip/Chip';
import CloseIcon from '@common/icon/CloseIcon';
import BackIcon from '@common/icon/BackIcon';
import PrimaryButton from '@common/button/PrimaryButton';
import { IModalContainerCommonProps } from '@common/modal/types';
import '@common/modal/common.scss';
import categories from '@src/const';
import { ICategoryType, CategoryDepthEnum } from '@src/types';

interface IEditCategoryModalPresenterProps extends IModalContainerCommonProps {
	onClick: () => void;
	value: Record<string, string>;
	onClickValue: (label: string, key: CategoryDepthEnum) => void;
	step: number;
	setStep: (params: number) => void;
}

const EditCategoryModalPresenter = ({
	open,
	onClose,
	onClick,
	value,
	onClickValue,
	step,
	setStep,
}: IEditCategoryModalPresenterProps): JSX.Element => {
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
				<CloseIcon onClick={() => onClose(false)} />
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
					<CloseIcon onClick={() => onClose(false)} />
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
				<PrimaryButton title="변경사항 적용" onClick={onClick} disabled={value.SUB === ''} />
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

export default EditCategoryModalPresenter;
