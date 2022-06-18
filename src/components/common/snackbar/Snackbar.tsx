import React from 'react';
import { Container, Snackbar as MuiSnackbar } from '@material-ui/core';
import classnames from 'classnames';
import { IoCheckmark } from 'react-icons/io5';
import { ISnackbarProps, SnackbarTypeEnum } from './types';
import './index.scss';

const Snackbar = (props: ISnackbarProps) => {
	const { open, message, type } = props;
	return (
		<MuiSnackbar
			className={classnames('snackbar', {
				'secondary-snackbar': type === SnackbarTypeEnum.secondary,
			})}
			open={open}
		>
			<Container
				className={classnames('snackbar-container', {
					'secondary-snackbar-container': type === SnackbarTypeEnum.secondary,
				})}
			>
				<span>{message}</span>
				{type !== SnackbarTypeEnum.secondary && <IoCheckmark size={24} />}
			</Container>
		</MuiSnackbar>
	);
};

export default Snackbar;
