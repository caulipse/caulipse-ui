import API from '@src/api';
import { IRequestPatchResetPw } from '@src/api/request/userProfile';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

export default () => {
	const { openSnackbar } = useSnackbar();
	const history = useHistory();

	const mutation = async (request: IRequestPatchResetPw) => {
		const res = await API.patchResetPw(request);
		return res.data;
	};
	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			openSnackbar('비밀번호 변경에 성공하였습니다.');
			history.push('/');
		},
		onError: (e: Error) => {
			window.alert('비밀번호 변경에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
