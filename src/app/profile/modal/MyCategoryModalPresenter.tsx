import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Modal from '@common/modal/Modal';
import Chip from '@common/chip/Chip';
import CloseButton from '@common/iconButton/CloseButton';
import CommonButton from '@common/button/CommonButton';
import { IModalContainerCommonProps } from '@common/modal/types';
import '@common/modal/common.scss';

interface IMyCategoryModalPresenterProps extends IModalContainerCommonProps {
	onClick: () => void;
	value: string[];
	onChangeValue: (params: string) => void;
}

const categories = ['취업/면접', '자격증', '고시/공무원', '어학', '프로그래밍', '공모전', '생활/기타'];

const MyCategoryModalPresenter = ({
	open,
	onClose,
	onClick,
	value,
	onChangeValue,
}: IMyCategoryModalPresenterProps): JSX.Element => {
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
								<Grid key={category} item xs={4} className="modal-chip-item">
									<Chip label={category} selected={value.includes(category)} onClick={handleClick} />
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

export default MyCategoryModalPresenter;
