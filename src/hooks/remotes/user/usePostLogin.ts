import { useMutation } from 'react-query';
import { IRequestLogin } from '@api/request/user';
import API from '@src/api';
import { IPostLogin } from '@src/api/response/login';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import useModal from '@src/hooks/modal/useModal';

export default () => {
	const { openSnackbar } = useSnackbar();
	const { closeModal } = useModal();

	const mutation = async (request: IRequestLogin) => {
		const res = await API.login(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: IPostLogin) => {
			// console.log(response);
			openSnackbar('로그인에 성공하였습니다.');
			closeModal();
		},
		onError: (e: Error) => {
			console.error(e.message);
		},
	});
};
