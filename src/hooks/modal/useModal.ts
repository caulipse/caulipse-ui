import React from 'react';
import { useAtom } from 'jotai';
import globalState from '@src/state';

const useModal = () => {
	const [state, setState] = useAtom(globalState);

	const openModal = (message: string) => {
		setState({ ...state, snackbar: { open: true, message, type } });
	};

	const closeModal = () => {
		setState({ ...state, snackbar: { open: false, message: '' } });
	};

	return { openModal, closeModal };
};

export default useModal;
