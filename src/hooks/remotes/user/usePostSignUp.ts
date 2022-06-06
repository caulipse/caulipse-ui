import API from '@src/api';
import { IRequestSignUp } from '@src/api/request/user';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useMutation } from 'react-query';

export default () => {
	// const { openSnackbar } = useSnackbar();

	const mutation = async (request: IRequestSignUp) => {
		const res = await API.signUp(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			// eslint-disable-next-line no-alert
			window.alert(
				`중앙대학교 포탈로 인증 메일이 발송되었습니다.${'\n'}인증 후 회원가입을 계속해 주세요.${'\n'}*스팸메일함을 꼭 확인해주세요!`
			);
		},
		onError: (e: Error) => {
			window.alert('메일 발송에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
