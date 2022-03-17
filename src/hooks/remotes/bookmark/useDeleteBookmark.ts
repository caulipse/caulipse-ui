import API from '@src/api';
import { useMutation } from 'react-query';

export default (id: string) => {
	const mutation = async () => {
		const res = await API.deleteBookmark(id);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			window.alert('북마크 목록이 삭제되었습니다.');
		},
		onError: (e: Error) => {
			console.error(e.message);
		},
	});
};
