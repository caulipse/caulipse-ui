import { useQuery } from 'react-query';
import API from '@src/api';
import { IResponseGetStudies } from '@api/response/study';
import QUERY_KEY from '@src/hooks/remotes';
import { IFilterOption } from '@src/app/study/types';

export default (orderBy: string, filter?: IFilterOption) => {
	const fetcher = async (): Promise<IResponseGetStudies> => {
		const res = await API.getStudies(orderBy, filter);
		return res.data;
	};

	let queryKey = `${QUERY_KEY.FETCH_STUDIES}/${orderBy}`;
	if (filter?.frequency?.length) {
		queryKey += filter?.frequency?.reduce((acc, cur) => {
			return acc + cur;
		}, '');
	}
	if (filter?.location?.length) {
		queryKey += filter?.location?.reduce((acc, cur) => {
			return acc + cur;
		}, '');
	}
	if (filter?.weekday?.length) {
		queryKey += filter?.weekday?.reduce((acc, cur) => {
			return acc + cur;
		}, '');
	}

	return useQuery(queryKey, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
