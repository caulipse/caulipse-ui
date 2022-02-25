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

interface IEditCategoryModalPresenterProps extends IModalContainerCommonProps {
	onClick: () => void;
	value: Record<string, string>;
	onClickValue: (label: string, key: string) => void;
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
	return (
		<Modal open={open} onClose={onClose} height="40.438rem">
			<Container className="modal-root-container modal-space-between-container">
				{step === 0 ? (
					<Container>
						<Container className="modal-title-container edit-category-modal-title-container">
							<span>카테고리 수정</span>
							<CloseIcon onClick={() => onClose(false)} />
						</Container>
						<Grid container spacing={1}>
							{categories.map((category) => {
								const handleClick = () => {
									onClickValue(category.label, 'main');
								};
								return (
									<Grid key={category.label} item xs={4} className="modal-chip-item">
										<Chip label={category.label} onClick={handleClick} />
									</Grid>
								);
							})}
						</Grid>
					</Container>
				) : (
					<>
						<Container>
							<Container className="modal-title-container">
								<BackIcon onClick={() => setStep(step - 1)} />
								<span>{value.main}</span>
								<CloseIcon onClick={() => onClose(false)} />
							</Container>
							<Grid container spacing={1}>
								{categories
									.filter((category) => category.label === value.main)[0]
									.subCategories.map((category) => {
										const handleClick = () => {
											onClickValue(category.label, 'sub');
										};
										return (
											<Grid key={category.label} item xs={4} className="modal-chip-item">
												<Chip label={category.label} onClick={handleClick} selected={category.label === value.sub} />
											</Grid>
										);
									})}
							</Grid>
						</Container>
						<Container>
							<PrimaryButton title="변경사항 적용" onClick={onClick} disabled={value.sub === ''} />
						</Container>
					</>
				)}
			</Container>
		</Modal>
	);
};

export default EditCategoryModalPresenter;
