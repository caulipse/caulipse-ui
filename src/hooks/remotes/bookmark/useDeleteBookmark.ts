import API from '@src/api';
import { useMutation } from 'react-query';

export default (id: string) => {
	const mutation = async () => {
		const res = await API.deleteBookmark(id);
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
