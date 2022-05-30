import { useMutation } from 'react-query';
import API from '@src/api';

export default () => {
	const mutation = async (id: string) => {
		const res = await API.deleteStudy(id);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
		},
		onError: (e: Error) => {
			window.alert('스터디 삭제에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
