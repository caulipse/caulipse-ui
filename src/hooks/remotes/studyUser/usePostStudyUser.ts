import { useMutation } from 'react-query';
import API from '@src/api';
import { IRequestPostStudyUser } from '@api/request/studyUser';

export default () => {
	const mutation = async (request: IRequestPostStudyUser) => {
		const res = await API.postStudyUser(request);
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
