import { useMutation } from 'react-query';
import API from '@src/api';

export default () => {
	const mutation = async (request: any) => {
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
