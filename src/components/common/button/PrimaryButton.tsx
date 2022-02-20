import React from 'react';
import { Button } from '@material-ui/core';
import { IButtonProps } from './types';
import './index.scss';

const PrimaryButton = ({ title, onClick, disabled = false, style }: IButtonProps) => {
	return (
		<Button className="primary-button" style={style} disabled={disabled} onClick={onClick}>
			{title}
		</Button>
	);
};

export default PrimaryButton;
