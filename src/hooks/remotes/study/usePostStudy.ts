import { useMutation, useQueryClient } from 'react-query';
import API from '@src/api';
import { IRequestPostStudy } from '@src/api/request/study';

export default () => {
	const mutation = async (request: IRequestPostStudy) => {
		const res = await API.postStudy(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
		},
		onError: (e: Error) => {
			window.alert('스터디 작성에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
