import React from 'react';
import { Container } from '@material-ui/core';
import classnames from 'classnames';
import { IoClose } from 'react-icons/io5';
import { IChipProps, ChipTypeEnum } from './types';
import './index.scss';

const Chip = ({
	selected,
	label,
	onClick,
	type = ChipTypeEnum.primary,
	withClose = false,
}: IChipProps): JSX.Element => {
	const handleClick = () => {
		if (onClick) onClick(label);
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
			<span>{label}</span>
			{withClose && <IoClose size={16} />}
		</Container>
	);
};

export default Chip;
