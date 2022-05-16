import API from '@src/api';
import { IResponseNicknameDuplicate } from '@src/api/response/user';
import { useQuery } from 'react-query';
import QUERY_KEY from '..';

export default (email: string, enabled: boolean) => {
	const fetcher = async (): Promise<IResponseNicknameDuplicate> => {
		const res = await API.getEmailDuplicate(email);
		return res.data;
	};
	return useQuery(`${QUERY_KEY.FETCH_EMAIL_DUPLICATE}`, fetcher, {
		enabled,
		onError: (e) => {
			console.log(e);
		},
	});
};
