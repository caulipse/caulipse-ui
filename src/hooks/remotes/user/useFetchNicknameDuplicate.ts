import API from '@src/api';
import { IResponseNicknameDuplicate } from '@src/api/response/user';
import { useQuery } from 'react-query';
import QUERY_KEY from '..';

export default (nickname: string) => {
	const fetcher = async (): Promise<IResponseNicknameDuplicate> => {
		const res = await API.getNicknameDuplicate(nickname);
		return res.data;
	};
	return useQuery(`${QUERY_KEY.FETCH_NICKNAME_DUPLICATE}`, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
