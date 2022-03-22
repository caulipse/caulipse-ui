import { useMutation } from 'react-query';
import API from '@src/api';
import { IRequestPatchStudy } from '@api/request/study';

export default () => {
	const mutation = async (request: IRequestPatchStudy) => {
		const res = await API.patchStudy(request);
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
