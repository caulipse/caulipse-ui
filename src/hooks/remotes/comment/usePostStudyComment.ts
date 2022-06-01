import API from '@src/api';
import { IRequestPostStudyComment } from '@src/api/request/studyComment';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useMutation, useQueryClient } from 'react-query';
import QUERY_KEY from '..';

export default () => {
	const { openSnackbar } = useSnackbar();
	const client = useQueryClient();

	const mutation = async (request: IRequestPostStudyComment) => {
		const res = await API.postStudyComment(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			openSnackbar('댓글 작성에 성공하였습니다.');
			client.refetchQueries(QUERY_KEY.FETCH_STUDY_COMMENTS);
			console.log(response);
		},
		onError: (e: Error) => {
			window.alert('댓글 작성에 실패하였습니다.');
			console.log(e.message);
		},
	});
};
