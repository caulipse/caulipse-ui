import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import Modal from '@common/modal/Modal';
import Chip from '@common/chip/Chip';
import CloseButton from '@common/iconButton/CloseButton';
import CommonButton from '@common/button/CommonButton';
import { IModalContainerCommonProps } from '@common/modal/types';
import '@common/modal/common.scss';
import categories from '@src/const';
import { CategoryType } from '@src/types';

const MyCategoryModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	// TODO
	// 관심 카테고리 조회 API 연동
	const [value, setValue] = useState<CategoryType[]>([]);

	const onClick = () => {
		// TODO
		// 관심 카테고리 수정 API 연동
	};

	const onChangeValue = (category: CategoryType) => {
		if (value.includes(category)) {
			setValue(value.filter((item) => item !== category));
		} else {
			setValue(value.concat(category));
		}
	};

	return (
		<Modal open={open} onClose={onClose} height="40.438rem">
			<Container className="modal-root-container modal-space-between-container">
				<Container>
					<Container className="modal-title-container">
						<span>관심 카테고리</span>
						<CloseButton onClick={() => onClose(false)} />
					</Container>
					<Grid container spacing={1}>
						{categories.map((category) => {
							const handleClick = () => {
								onChangeValue(category);
							};
							return (
								<Grid key={category.code} item xs={4} className="modal-chip-item">
									<Chip label={category.label} selected={value.includes(category)} onClick={handleClick} />
								</Grid>
							);
						})}
					</Grid>
				</Container>
				<Container>
					<CommonButton title="확인" onClick={onClick} />
				</Container>
			</Container>
		</Modal>
	);
};

export default MyCategoryModal;
