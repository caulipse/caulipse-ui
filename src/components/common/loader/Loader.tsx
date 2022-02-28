import React from 'react';
import { Container, CircularProgress } from '@material-ui/core';
import './index.scss';

const Loader = () => {
	return (
		<Container className="loader">
			<CircularProgress color="inherit" size="3rem" />
		</Container>
	);
};

export default Loader;
