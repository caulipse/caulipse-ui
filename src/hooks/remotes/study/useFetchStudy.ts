import { useQuery } from 'react-query';
import API from '@src/api';
import { IResponseGetStudy } from '@api/response/study';

export default (id: string) => {
	const fetcher = async (): Promise<IResponseGetStudy> => {
		const res = await API.getStudy(id);
		return res.data;
	};

	return useQuery(`fetchStudy/${id}`, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
