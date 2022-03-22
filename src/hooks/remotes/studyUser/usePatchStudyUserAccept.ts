import { useMutation } from 'react-query';
import API from '@src/api';
import { IRequestPatchStudyUserByHost } from '@api/request/studyUser';

export default () => {
	const mutation = async (request: IRequestPatchStudyUserByHost) => {
		const res = await API.patchStudyUserByHost(request);
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
