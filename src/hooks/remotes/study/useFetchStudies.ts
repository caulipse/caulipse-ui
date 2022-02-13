import { useQuery } from 'react-query';
import API from '@src/api';

// TODO
// parameter
export default () => {
	const fetcher = async () => {
		const res = await API.getStudies();
		return res.data;
	};

	return useQuery('fetchStudies', fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
