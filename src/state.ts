import { atom } from 'jotai';
import { ISnackbarProps, SnackbarTypeEnum } from '@common/snackbar/types';
import getCookie from '@shared/utils/getCookie';

interface IGlobalStateProps {
	login: boolean;
	snackbar: ISnackbarProps;
}

const globalState = atom({
	login: !!getCookie('accessToken'),
	snackbar: {
		open: false,
		message: '',
		type: SnackbarTypeEnum.primary,
	},
} as IGlobalStateProps);

export default globalState;
