import API from '@src/api';
import { getNoticesInterface } from '@src/api/response/notice';
import { useQuery } from 'react-query';
import QUERY_KEY from '@src/hooks/remotes';

export default (offset?: number, limit?: number) => {
	const fetcher = async (): Promise<getNoticesInterface> => {
		const res = await API.getNotices(offset, limit);
		return res.data;
	};
	return useQuery([QUERY_KEY.FETCH_NOTICES, offset], fetcher, {
		onError: (e) => {
			window.alert('공지사항 목록 조회에 실패하였습니다.');
			console.log(e);
		},
	});
};
