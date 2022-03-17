import API from '@src/api';
import { getNoticesInterface } from '@src/api/response/notice';
import { useQuery } from 'react-query';
import QUERY_KEY from '@src/hooks/remotes';

export default () => {
	const fetcher = async (): Promise<getNoticesInterface> => {
		const res = await API.getNotices();
		return res.data;
	};
	return useQuery(QUERY_KEY.FETCH_NOTICES, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
