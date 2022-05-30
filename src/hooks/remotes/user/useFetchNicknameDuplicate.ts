import API from '@src/api';
import { IResponseNicknameDuplicate } from '@src/api/response/user';
import { useQuery } from 'react-query';
import QUERY_KEY from '..';

export default (nickname: string, enabled: boolean) => {
	const fetcher = async (): Promise<IResponseNicknameDuplicate> => {
		const res = await API.getNicknameDuplicate(nickname);
		return res.data;
	};
	return useQuery(`${QUERY_KEY.FETCH_NICKNAME_DUPLICATE}`, fetcher, {
		enabled,
		onError: (e) => {
			window.alert('닉네임 중복 체크에 실패하였습니다.');
			console.log(e);
		},
	});
};
