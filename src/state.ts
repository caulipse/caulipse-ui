import { atom } from 'jotai';
import { ISnackbarProps, SnackbarTypeEnum } from '@common/snackbar/types';
import getCookie from '@shared/utils/getCookie';
import { IGlobalModalProps } from '@common/modal/types';
import { IStudyListState } from '@src/app/study/types';
import { sortOptions } from '@src/const';
import { CategoryType } from '@src/types';
import { atomWithStorage } from 'jotai/utils';
import ModalKeyEnum from '@common/modal/enum';

interface IGlobalStateProps {
	login: boolean;
	userId: string;
	snackbar: ISnackbarProps;
	modal: IGlobalModalProps;
}

interface IModalStateProps {
	open: boolean;
	key?: ModalKeyEnum | '';
	params?: any;
}

interface ISnackbarStateProps {
	open: boolean;
	message: string;
	type?: SnackbarTypeEnum;
}

const globalState = atom({
	login: !!getCookie('accessToken'),
} as IGlobalStateProps);

export const modalState = atom({
	open: false,
	key: '',
	params: {},
} as IModalStateProps);

export const snackbarState = atom({
	open: false,
	message: '',
	type: SnackbarTypeEnum.primary,
} as ISnackbarStateProps);

export const studyListState = atom({
	sortOption: sortOptions[0],
	filterOption: {
		weekday: [],
		frequency: [],
		location: [],
		categoryCode: [] as CategoryType[],
	},
	paginationOption: {
		limit: 15,
		pageNo: 1,
	},
} as IStudyListState);

export const userState = atomWithStorage('userState', {
	userId: '',
});

export default globalState;
