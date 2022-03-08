import { atom } from 'jotai';
import { ISnackbarProps, SnackbarTypeEnum } from '@common/snackbar/types';
import getCookie from '@shared/utils/getCookie';
import { IGlobalModalProps } from '@common/modal/types';
import { IStudyListState } from '@src/app/study/types';
import { sortOptions } from '@src/const';

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
		params: {},
	},
} as IGlobalStateProps);

interface IStudyListStateProps {
	studyList: IStudyListState;
}

export const studyListState = atom({
	studyList: {
		sortOption: sortOptions[0],
	},
} as IStudyListStateProps);

export default globalState;
