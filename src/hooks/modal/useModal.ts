import React from 'react';
import { useAtom } from 'jotai';
import { modalState } from '@src/state';
import ModalKeyEnum from '@common/modal/enum';

const useModal = () => {
	const [state, setState] = useAtom(modalState);

	const openModal = (key: ModalKeyEnum, params?: any) => {
		setState({ ...state, open: true, key, params });
	};

	const closeModal = () => {
		setState({ ...state, open: false, key: '', params: {} });
	};

	return { openModal, closeModal };
};

export default useModal;
