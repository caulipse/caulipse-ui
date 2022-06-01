import API from '@src/api';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useMutation, useQueryClient } from 'react-query';
import QUERY_KEY from '@src/hooks/remotes';

export default (id: string) => {
	const { openSnackbar } = useSnackbar();
	const client = useQueryClient();

	const mutation = async () => {
		const res = await API.deleteBookmark(id);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			client.refetchQueries(QUERY_KEY.FETCH_BOOKMARKS);
			openSnackbar('북마크 목록이 삭제되었습니다.');
		},
		onError: (e: Error) => {
			window.alert('북마크 삭제에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
