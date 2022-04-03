import { useMutation, useQueryClient } from 'react-query';
import API from '@src/api';
import { IRequestPostStudy } from '@src/api/request/study';

export default (callback: () => void) => {
	const mutation = async (request: IRequestPostStudy) => {
		const res = await API.postStudy(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			callback();
		},
		onError: (e: Error) => {
			console.error(e.message);
		},
	});
};
