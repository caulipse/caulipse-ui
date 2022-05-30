import API from '@src/api';
import { IResponseGetAppiedStudies } from '@src/api/response/study';
import { useQuery } from 'react-query';
import QUERY_KEY from '..';

export default () => {
	const fetcher = async (): Promise<IResponseGetAppiedStudies> => {
		const res = await API.getAppliedStudies();
		return res.data;
	};
	return useQuery(QUERY_KEY.FETCH_APPLIED_STUDIES, fetcher, {
		onError: (e) => {
			window.alert('신청 스터디 목록 조회에 실패하였습니다.');
			console.log(e);
		},
	});
};
