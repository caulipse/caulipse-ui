import { useQuery } from 'react-query';
import API from '@src/api';
import { IResponseGetStudy } from '@api/response/study';
import QUERY_KEY from '@src/hooks/remotes';

export default (id: string) => {
	const fetcher = async (): Promise<IResponseGetStudy> => {
		const res = await API.getStudy(id);
		return res.data;
	};

	return useQuery(`${QUERY_KEY.FETCH_STUDY}/${id}`, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
