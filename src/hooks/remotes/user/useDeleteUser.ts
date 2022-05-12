import API from '@src/api';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userState as globalUserState } from '@src/state';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';

export default () => {
	const history = useHistory();
	const { openSnackbar } = useSnackbar();
	const [userState, setUserState] = useAtom(globalUserState);

	const mutation = async () => {
		const res = await API.deleteUser();
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			openSnackbar('탈퇴가 완료되었습니다.');
			setUserState({ ...userState, userId: '' });
			history.push('/');
		},
		onError: (e: Error) => {
			console.error(e.message);
		},
	});
};
