import { useMutation, useQueryClient } from 'react-query';
import API from '@src/api';
import { IRequestPostStudy } from '@src/api/request/study';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';

export default (callback: () => void) => {
	const { openSnackbar } = useSnackbar();
	const mutation = async (request: IRequestPostStudy) => {
		const res = await API.postStudy(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			callback();
			openSnackbar('스터디 모집글 등록 완료');
		},
		onError: (e: Error) => {
			console.error(e.message);
		},
	});
};
