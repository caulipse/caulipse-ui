import React from 'react';
import { useAtom } from 'jotai';
import globalState from '@src/state';
import ModalKeyEnum from '@common/modal/enum';

const useModal = () => {
	const [state, setState] = useAtom(globalState);

	const openModal = (key: ModalKeyEnum, params?: any) => {
		setState({ ...state, modal: { open: true, key, params } });
	};

	const closeModal = () => {
		setState({ ...state, modal: { open: false, key: '', params: {} } });
	};

	return { openModal, closeModal };
};

export default useModal;
