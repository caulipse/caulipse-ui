import { useMutation, useQueryClient } from 'react-query';
import API from '@src/api';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import QUERY_KEY from '@src/hooks/remotes';

export default () => {
	const { openSnackbar } = useSnackbar();
	const client = useQueryClient();

	const mutation = async (id: string) => {
		const res = await API.closeStudy(id);
		return { id, res };
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			client.refetchQueries(QUERY_KEY.FETCH_MY_STUDIES);
			client.refetchQueries(`${QUERY_KEY.FETCH_STUDY}/${response.id}`);
			openSnackbar('스터디 모집을 마감했습니다.');
		},
		onError: (e: Error) => {
			console.error(e.message);
		},
	});
};
