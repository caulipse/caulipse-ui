import API from '@src/api';
import { getNoticeInterface } from '@src/api/response/notice';
import { useQuery } from 'react-query';

export default (id: string) => {
	const fetcher = async (): Promise<getNoticeInterface> => {
		const res = await API.getNotice(id);
		return res.data;
	};
	return useQuery(`fetchNotice/${id}`, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
