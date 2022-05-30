import API from '@src/api';
import { IRequestPostUserProfile } from '@src/api/request/userProfile';
import { useMutation } from 'react-query';

export default () => {
	const mutation = async (request: IRequestPostUserProfile) => {
		const res = await API.postUserProfile(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
		},
		onError: (e: Error) => {
			window.alert('유저 프로필 생성에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
