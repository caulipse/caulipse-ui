import API from '@src/api';
import { useMutation } from 'react-query';

export default () => {
	const mutation = async () => {
		const res = await API.deleteUser();
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
		},
		onError: (e: any) => {
			console.error(e.message);
		},
	});
};
