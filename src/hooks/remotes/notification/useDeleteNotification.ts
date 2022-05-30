import API from '@src/api';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useMutation } from 'react-query';

export default (id: string) => {
	const { openSnackbar } = useSnackbar();

	const mutation = async () => {
		const res = await API.deleteUserNotifications(id);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			openSnackbar('알림이 삭제되었습니다.');
		},
		onError: (e: Error) => {
			window.alert('알림 삭제에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
