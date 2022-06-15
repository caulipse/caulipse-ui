import API from '@src/api';
import { IRequestPatchUserRole } from '@src/api/request/userProfile';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

export default () => {
	const { openSnackbar } = useSnackbar();
	const history = useHistory();

	const mutation = async ({ userId, token }: IRequestPatchUserRole) => {
		const res = await API.patchUserRole(userId, token);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			openSnackbar('회원가입이 완료되었습니다.');
			setTimeout(() => {
				history.replace('/');
			}, 1000);
		},
		onError: (e: Error) => {
			window.alert('회원가입에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
