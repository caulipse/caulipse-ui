import { useMutation } from 'react-query';
import { IRequestLogin } from '@api/request/user';
import API from '@src/api';
import { useAtom } from 'jotai';
import globalState from '@src/state';
import { IPostLogin } from '@src/api/response/login';

export default (setSuccess: React.Dispatch<React.SetStateAction<boolean | undefined>>) => {
	const [state, setState] = useAtom(globalState);

	const mutation = async (request: IRequestLogin) => {
		const res = await API.login(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: IPostLogin) => {
			console.log(response);
			setSuccess(true);
			setState({ ...state, userId: response?.userId });
		},
		onError: (e: Error) => {
			console.error(e.message);
			setSuccess(false);
		},
	});
};
