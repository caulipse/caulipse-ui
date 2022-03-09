import API from '@src/api';
import { IRequestPatchUserProfile } from '@src/api/request/userProfile';
import { useMutation } from 'react-query';

export default () => {
	const mutation = async (request: Partial<IRequestPatchUserProfile>) => {
		const res = await API.patchUserProfile(request);
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
