import API from '@src/api';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useMutation, useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

export default () => {
	const history = useHistory();
	const { openSnackbar } = useSnackbar();

	const mutation = async (): Promise<any> => {
		const res = await API.logout();
		return res.data;
	};
	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			openSnackbar('로그아웃되었습니다.');
		},
		onError: (e: Error) => {
			console.error(e.message);
		},
	});
};
