import API from '@src/api';
import { IResponseGetMyStudies } from '@src/api/response/study';
import { useQuery } from 'react-query';
import QUERY_KEY from '..';

export default () => {
	const fetcher = async (): Promise<IResponseGetMyStudies> => {
		const res = await API.getMyStudies();
		return res.data;
	};
	return useQuery(QUERY_KEY.FETCH_MY_STUDIES, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
