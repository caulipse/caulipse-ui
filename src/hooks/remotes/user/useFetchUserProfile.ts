import API from '@src/api';
import { IResponseGetUserProfile } from '@src/api/response/user';
import { useQuery } from 'react-query';

export default (id: string) => {
	const fetcher = async (): Promise<IResponseGetUserProfile> => {
		const res = await API.getUserProfile(id);
		return res.data;
	};
	return useQuery(`fetchUserProfile/${id}`, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
