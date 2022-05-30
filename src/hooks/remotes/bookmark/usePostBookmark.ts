import API from '@src/api';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useMutation } from 'react-query';

export default (studyId: string) => {
	const { openSnackbar } = useSnackbar();

	const mutation = async () => {
		const res = await API.postBookmark(studyId);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			openSnackbar('북마크 신청이 완료되었습니다.');
			console.log(response);
		},
		onError: (e: Error) => {
			window.alert('북마크 신청에 실패하였습니다.');
			console.log(e.message);
		},
	});
};
