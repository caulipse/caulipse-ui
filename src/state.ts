import { atom } from 'jotai';

interface IGlobalStateProps {
	login: boolean;
}

const globalState = atom({
	login: !!localStorage.getItem('token'),
} as IGlobalStateProps);

export default globalState;
