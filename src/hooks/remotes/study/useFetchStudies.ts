import { useQuery } from 'react-query';
import API from '@src/api';
import { IResponseGetStudies } from '@api/response/study';
import QUERY_KEY from '@src/hooks/remotes';
import { IFilterOption, IPaginationOption } from '@src/app/study/types';

export default (orderBy: string, filter?: IFilterOption, pagination?: IPaginationOption) => {
	const fetcher = async (): Promise<IResponseGetStudies> => {
		const res = await API.getStudies(orderBy, filter, pagination);
		return res.data;
	};

	let queryKey = `${QUERY_KEY.FETCH_STUDIES}/${orderBy}`;
	if (filter?.frequency?.length) {
		queryKey += filter?.frequency?.join(',');
	}
	if (filter?.location?.length) {
		queryKey += filter?.location?.join(',');
	}
	if (filter?.weekday?.length) {
		queryKey += filter?.weekday?.join(',');
	}
	if (filter?.categoryCode?.length) {
		queryKey += filter?.categoryCode?.reduce((acc, cur) => {
			return acc + cur.label;
		}, '');
	}
	if (pagination?.limit) {
		queryKey += pagination?.limit;
	}
	if (pagination?.pageNo) {
		queryKey += pagination?.pageNo;
	}

	return useQuery(queryKey, fetcher, {
		onError: (e) => {
			window.alert('스터디 목록 조회에 실패하였습니다.');
			console.log(e);
		},
	});
};
