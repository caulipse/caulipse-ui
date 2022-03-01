import React from 'react';
import { useAtom } from 'jotai';
import globalState from '@src/state';
import { SnackbarTypeEnum } from '@common/snackbar/types';

const useSnackbar = () => {
	const [state, setState] = useAtom(globalState);
	let tid: any;

	const openSnackbar = (message: string, type?: SnackbarTypeEnum) => {
		setState({ ...state, snackbar: { open: true, message, type } });
		tid = setTimeout(() => {
			closeSnackbar();
		}, 6000);
	};

	const closeSnackbar = () => {
		setState({ ...state, snackbar: { open: false, message: '' } });
		clearTimeout(tid);
	};

	return { openSnackbar, closeSnackbar };
};

export default useSnackbar;
