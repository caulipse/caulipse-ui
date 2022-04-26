import API from '@src/api';
import { IRequestSignUp } from '@src/api/request/user';
import { useMutation } from 'react-query';

export default () => {
	const mutation = async (request: IRequestSignUp) => {
		const res = await API.signUp(request);
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
