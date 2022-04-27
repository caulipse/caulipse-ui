import API from '@src/api';
import { IRequestPatchResetPwMail } from '@src/api/request/userProfile';
import { useMutation } from 'react-query';

export default () => {
	const mutation = async (request: IRequestPatchResetPwMail) => {
		const res = await API.patchResetPwMail(request.email);
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
