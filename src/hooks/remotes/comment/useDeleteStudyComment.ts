import API from '@src/api';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useMutation } from 'react-query';

export default (studyId: string, commentId: string) => {
	const { openSnackbar } = useSnackbar();

	const mutation = async () => {
		const res = await API.deleteStudyComment({ id: studyId, commentId });
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			openSnackbar('댓글 삭제되었습니다.');
		},
		onError: (e: Error) => {
			console.error(e.message);
		},
	});
};
