import API from '@src/api';
import { IRequestPatchResetPwMail } from '@src/api/request/userProfile';
import { useMutation } from 'react-query';

export default () => {
	const mutation = async (request: IRequestPatchResetPwMail) => {
		const res = await API.patchResetPwMail(request.email);
		return res.data;
	};
	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			// eslint-disable-next-line no-alert
			window.alert(`중앙대학교 포탈로 인증 메일이 발송되었습니다.${'\n'}인증 후 비밀번호 재설정을 계속해 주세요.`);
		},
		onError: (e: Error) => {
			window.alert('매알 발송에 실패하였습니다.');
			console.error(e.message);
		},
	});
};
