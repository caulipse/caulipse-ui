import { useQuery } from 'react-query';
import API from '@src/api';
import { IResponseGetStudies } from '@api/response/study';
import QUERY_KEY from '@src/hooks/remotes';
// TODO
// parameter
export default (orderBy?: string) => {
	const fetcher = async (): Promise<IResponseGetStudies> => {
		const res = await API.getStudies(orderBy);
		return res.data;
	};

	return useQuery(`${QUERY_KEY.FETCH_STUDIES}/${orderBy}`, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
