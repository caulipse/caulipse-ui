import API from '@src/api';
import { IRequestPostStudyComment } from '@src/api/request/studyComment';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useMutation } from 'react-query';

export default () => {
	const { openSnackbar } = useSnackbar();

	const mutation = async (request: IRequestPostStudyComment) => {
		const res = await API.postStudyComment(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			openSnackbar('댓글 작성에 성공하였습니다.');
			console.log(response);
		},
		onError: (e: Error) => {
			console.log(e.message);
		},
	});
};
