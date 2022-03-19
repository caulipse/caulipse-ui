import API from '@src/api';
import { IRequestPostStudyComment } from '@src/api/request/studyComment';
import { useMutation } from 'react-query';

export default () => {
	const mutation = async (request: IRequestPostStudyComment) => {
		const res = await API.postStudyComment(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			window.alert('댓글 작성에 성공하였습니다.');
			console.log(response);
		},
		onError: (e: Error) => {
			console.log(e.message);
		},
	});
};
