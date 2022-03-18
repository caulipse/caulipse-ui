import API from '@src/api';
import { useMutation } from 'react-query';

export default (studyId: string) => {
	const mutation = async () => {
		const res = await API.postBookmark(studyId);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			window.alert('북마크 신청이 완료되었습니다.');
			console.log(response);
		},
		onError: (e: Error) => {
			console.log(e.message);
		},
	});
};
