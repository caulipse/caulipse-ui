import API from '@src/api';
import { useMutation } from 'react-query';

export default (studyId: string) => {
	const mutation = async () => {
		const res = await API.postBookmark(studyId);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
		},
		onError: (e: Error) => {
			console.log(e.message);
		},
	});
};
