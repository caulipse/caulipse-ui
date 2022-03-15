import { Box } from '@material-ui/core';
import React from 'react';
import './index.scss';

interface ProgressBarProps {
	current: number;
	max: number;
}

const ProgressBar = ({ current, max }: ProgressBarProps): JSX.Element => {
	return (
		<Box className="progress-bar-container">
			<progress className="progress-bar-progress" max={max} value={current} />
			<span className="progress-bar-current">{current}</span>
			<span className="progress-bar-max">/{max}</span>
		</Box>
	);
};

export default ProgressBar;
