import API from '@src/api';
import { IResponseGetUserProfile } from '@src/api/response/user';
import { useQuery } from 'react-query';
import QUERY_KEY from '@src/hooks/remotes';

export default (id: string) => {
	const fetcher = async (): Promise<IResponseGetUserProfile> => {
		const res = await API.getUserProfile(id);
		return res.data;
	};
	return useQuery(`${QUERY_KEY.FETCH_USER_PROFILE}/${id}`, fetcher, {
		onError: (e) => {
			window.alert('유저 프로필 조회에 실패하였습니다.');
			console.log(e);
		},
	});
};
