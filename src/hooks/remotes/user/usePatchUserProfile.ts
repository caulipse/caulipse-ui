import API from '@src/api';
import { IRequestPatchUserProfile } from '@src/api/request/userProfile';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

export default () => {
	const history = useHistory();
	const { openSnackbar } = useSnackbar();

	const mutation = async (request: Partial<IRequestPatchUserProfile>) => {
		const res = await API.patchUserProfile(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			history.goBack();
			openSnackbar('유저 프로필 수정에 성공하였습니다.');
			console.log(response);
		},
		onError: (e: Error) => {
			window.alert('유저 프로필 수정에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
