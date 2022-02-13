import { useQuery } from 'react-query';
import API from '@src/api';
import { IResponseGetStudies } from '@api/response/study';

// TODO
// parameter
export default () => {
	const fetcher = async (): Promise<IResponseGetStudies> => {
		const res = await API.getStudies();
		return res.data;
	};

	return useQuery('fetchStudies', fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
