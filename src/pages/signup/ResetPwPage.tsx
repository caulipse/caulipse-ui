import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { IoArrowBack, IoClose } from 'react-icons/io5';
import './index.scss';

const ResetPwPage = (): JSX.Element => {
	return (
		<Box>
			<Box className="reset-pw-header-con">
				<IoArrowBack className="reset-pw-icon" color="#fff" />
				<Typography>로고</Typography>
				<Box className="reset-pw-icon" />
			</Box>
		</Box>
	);
};

export default ResetPwPage;
