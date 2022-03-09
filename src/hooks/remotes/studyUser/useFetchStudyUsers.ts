import { useQuery } from 'react-query';
import API from '@src/api';
import { IResponseGetStudyUsers } from '@api/response/study';
import QUERY_KEY from '@src/hooks/remotes';

export default (id: string) => {
	const fetcher = async (): Promise<IResponseGetStudyUsers> => {
		const res = await API.getStudyUsers(id);
		return res.data;
	};

	return useQuery(`${QUERY_KEY.FETCH_STUDY_USERS}/${id}`, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
