import { useMutation, useQueryClient } from 'react-query';
import API from '@src/api';
import { IRequestPostStudy } from '@src/api/request/study';
import QUERY_KEY from '..';

export default () => {
	const client = useQueryClient();

	const mutation = async (request: IRequestPostStudy) => {
		const res = await API.postStudy(request);
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			client.refetchQueries(QUERY_KEY.FETCH_STUDIES);
		},
		onError: (e: Error) => {
			console.error(e.message);
		},
	});
};
