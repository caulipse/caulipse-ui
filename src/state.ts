import { atom } from 'jotai';
import { ISnackbarProps, SnackbarTypeEnum } from '@common/snackbar/types';

interface IGlobalStateProps {
	login: boolean;
	snackbar: ISnackbarProps;
}

const globalState = atom({
	login: !!localStorage.getItem('token'),
	snackbar: {
		open: false,
		message: '',
		type: SnackbarTypeEnum.primary,
	},
} as IGlobalStateProps);

export default globalState;
