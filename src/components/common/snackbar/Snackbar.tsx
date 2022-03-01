import React from 'react';
import { Container, Snackbar as MuiSnackbar } from '@material-ui/core';
import classnames from 'classnames';
import CheckIcon from '@common/icon/CheckIcon';
import { ISnackbarProps, SnackbarTypeEnum } from './types';
import './index.scss';

const Snackbar = (props: ISnackbarProps) => {
	const { open, message, type } = props;
	return (
		<MuiSnackbar className="snackbar" open={open}>
			<Container
				className={classnames('snackbar-container', {
					'secondary-snackbar-container': type === SnackbarTypeEnum.secondary,
				})}
			>
				<span>{message}</span>
				<CheckIcon />
			</Container>
		</MuiSnackbar>
	);
};

export default Snackbar;
