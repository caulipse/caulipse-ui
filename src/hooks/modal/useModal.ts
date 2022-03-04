import React from 'react';
import { useAtom } from 'jotai';
import globalState from '@src/state';

const useModal = () => {
	const [state, setState] = useAtom(globalState);

	const openModal = (key: string) => {
		setState({ ...state, modal: { open: true, key } });
	};

	const closeModal = (key: string) => {
		setState({ ...state, modal: { open: false, key: '' } });
	};

	return { openModal, closeModal };
};

export default useModal;
