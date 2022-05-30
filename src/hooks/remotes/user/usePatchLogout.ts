import API from '@src/api';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useAtom } from 'jotai';
import { useMutation, useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { userState as globalUserState } from '@src/state';

export default () => {
	const history = useHistory();
	const { openSnackbar } = useSnackbar();
	const [userState, setUserState] = useAtom(globalUserState);

	const mutation = async (): Promise<any> => {
		const res = await API.logout();
		return res.data;
	};
	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			openSnackbar('로그아웃되었습니다.');
			setUserState({ ...userState, userId: '' });
			history.push('/');
		},
		onError: (e: Error) => {
			window.alert('로그아웃에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
