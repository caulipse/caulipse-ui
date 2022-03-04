import { atom } from 'jotai';
import { ISnackbarProps, SnackbarTypeEnum } from '@common/snackbar/types';
import getCookie from '@shared/utils/getCookie';
import { IGlobalModalProps } from '@common/modal/types';

interface IGlobalStateProps {
	login: boolean;
	snackbar: ISnackbarProps;
	modal: IGlobalModalProps;
}

const globalState = atom({
	login: !!getCookie('accessToken'),
	snackbar: {
		open: false,
		message: '',
		type: SnackbarTypeEnum.primary,
	},
	modal: {
		open: false,
		key: '',
	},
} as IGlobalStateProps);

export default globalState;
