import React from 'react';
import { Container } from '@material-ui/core';
import classnames from 'classnames';
import { IChipProps } from './types';
import './index.scss';

const Chip = ({ selected, label, onClick }: IChipProps): JSX.Element => {
	const handleClick = () => {
		onClick(label);
	};
	return (
		<Container onClick={handleClick} className={classnames('chip-container', { selected })}>
			{label}
		</Container>
	);
};

export default Chip;
