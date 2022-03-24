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
			console.log(e);
		},
	});
};
