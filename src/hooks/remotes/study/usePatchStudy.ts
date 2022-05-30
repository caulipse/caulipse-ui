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
			window.alert('스터디 수정에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
