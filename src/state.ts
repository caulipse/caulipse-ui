import { atom } from 'jotai';
import { ISnackbarProps, SnackbarTypeEnum } from '@common/snackbar/types';
import getCookie from '@shared/utils/getCookie';
import { IGlobalModalProps } from '@common/modal/types';
import { IStudyListState } from '@src/app/study/types';
import { sortOptions } from '@src/const';
import { CategoryType } from '@src/types';

interface IGlobalStateProps {
	login: boolean;
	userId: string;
	snackbar: ISnackbarProps;
	modal: IGlobalModalProps;
}

const globalState = atom({
	login: !!getCookie('accessToken'),
	// FIXME
	// 로그인 기능 구현 이후 수정 필요
	userId: '0357501b-8887-42e1-9dde-8344e0de60b0',
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

export const studyListState = atom({
	sortOption: sortOptions[0],
	filterOption: {
		weekday: [],
		frequency: [],
		location: [],
		categoryCode: [] as CategoryType[],
	},
} as IStudyListState);

export default globalState;
