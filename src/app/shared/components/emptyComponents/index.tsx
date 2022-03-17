import { Box, Button } from '@material-ui/core';
import React from 'react';
import './index.scss';

export interface EmptyComponentInterface {
	title: string;
	buttonText: string;
	onClick: () => void;
}

const EmptyComponent = ({ title, buttonText, onClick }: EmptyComponentInterface): JSX.Element => {
	return (
		<Box className="empty-container">
			<div className="empty-text">{title}</div>
			<Button onClick={onClick} className="empty-button">
				{buttonText}
			</Button>
		</Box>
	);
};

export default EmptyComponent;
