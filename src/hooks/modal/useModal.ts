import React from 'react';
import { useAtom } from 'jotai';
import globalState from '@src/state';
import ModalKeyEnum from '@common/modal/enum';

const useModal = () => {
	const [state, setState] = useAtom(globalState);

	const openModal = (key: ModalKeyEnum) => {
		setState({ ...state, modal: { ...state.modal, open: true, key } });
	};

	const closeModal = () => {
		setState({ ...state, modal: { open: false, key: '', params: {} } });
	};

	const setParams = (params: any) => {
		setState({ ...state, modal: { ...state.modal, params } });
	};

	return { openModal, closeModal, setParams };
};

export default useModal;
