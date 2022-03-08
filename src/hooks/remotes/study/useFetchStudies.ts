import { useQuery } from 'react-query';
import API from '@src/api';
import { IResponseGetStudies } from '@api/response/study';
import QUERY_KEY from '@src/hooks/remotes';

// TODO
// parameter
export default () => {
	const fetcher = async (): Promise<IResponseGetStudies> => {
		const res = await API.getStudies();
		return res.data;
	};

	return useQuery(QUERY_KEY.FETCH_STUDIES, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
