import React from 'react';
import { Button } from '@material-ui/core';
import { IButtonProps } from './types';
import './index.scss';

const OutlineButton = ({ title, onClick, style }: IButtonProps) => {
	return (
		<Button disableFocusRipple className="outline-button" style={style} onClick={onClick}>
			{title}
		</Button>
	);
};

export default OutlineButton;
