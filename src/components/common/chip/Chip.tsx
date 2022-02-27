import React from 'react';
import { Container } from '@material-ui/core';
import classnames from 'classnames';
import { ChipTypeEnum, IChipProps } from './types';
import './index.scss';

const Chip = ({ selected, label, onClick, type = ChipTypeEnum.primary }: IChipProps): JSX.Element => {
	const handleClick = () => {
		onClick(label);
	};
	return (
		<Container
			onClick={handleClick}
			className={classnames(
				'chip-container',
				{ selected },
				{ 'secondary-chip-container': type === ChipTypeEnum.secondary }
			)}
		>
			{label}
		</Container>
	);
};

export default Chip;
