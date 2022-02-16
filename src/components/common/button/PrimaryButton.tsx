import React from 'react';
import { Button } from '@material-ui/core';
import './index.scss';

interface IPrimaryButtonProps {
	title: string;
	onClick: () => void;
	disabled?: boolean;
	style?: React.CSSProperties;
}

const PrimaryButton = ({ title, onClick, disabled = false, style }: IPrimaryButtonProps) => {
	return (
		<Button className="primary-button" style={style} disabled={disabled} onClick={onClick}>
			{title}
		</Button>
	);
};

export default PrimaryButton;
