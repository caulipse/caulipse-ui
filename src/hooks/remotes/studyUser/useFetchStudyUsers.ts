import { useQuery } from 'react-query';
import API from '@src/api';
import { IResponseGetStudyUsers } from '@api/response/study';

export default (id: string) => {
	const fetcher = async (): Promise<IResponseGetStudyUsers> => {
		const res = await API.getStudyUsers(id);
		return res.data;
	};

	return useQuery(`fetchStudyUsers/${id}`, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
