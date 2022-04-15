import API from '@src/api';
import { IResponseGetSearchStudies } from '@src/api/response/study';
import { useQuery } from 'react-query';
import QUERY_KEY from '..';

export default (keyword: string, frequency?: string, weekday?: string, location?: string, orderBy?: string) => {
	const fetcher = async (): Promise<IResponseGetSearchStudies> => {
		const res = await API.getSearchStudies(keyword, frequency, weekday, location, orderBy);
		return res.data;
	};
	return useQuery([QUERY_KEY.FETCH_SEARCH_STUDIES, { keyword, frequency, weekday, location, orderBy }], fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
