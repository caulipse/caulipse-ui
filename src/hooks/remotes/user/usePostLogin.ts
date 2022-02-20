import { useMutation } from 'react-query';
import { IRequestLogin } from '@api/request/user';
import API from '@src/api';

export default () => {
	const mutation = async (request: IRequestLogin) => {
		const res = await API.login(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
		},
		onError: (e: Error) => {
			console.error(e.message);
		},
	});
};
