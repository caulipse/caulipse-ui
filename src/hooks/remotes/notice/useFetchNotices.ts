import API from '@src/api';
import { getNoticeInterface } from '@src/api/response/notice';
import { useQuery } from 'react-query';

export default () => {
	const fetcher = async (): Promise<getNoticeInterface> => {
		const res = await API.getNotices();
		return res.data;
	};
	return useQuery('fetchNotices', fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
