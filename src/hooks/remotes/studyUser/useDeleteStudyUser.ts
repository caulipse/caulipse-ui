import { useMutation } from 'react-query';
import API from '@src/api';

export default () => {
	const mutation = async (id: string) => {
		const res = await API.deleteStudyUser(id);
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
