import API from '@src/api';
import { GetUserProfileResponse } from '@src/api/response/user';
import { useQuery } from 'react-query';

export default (id: string) => {
	const fetcher = async (): Promise<GetUserProfileResponse> => {
		const res = await API.getUserProfile(id);
		return res.data;
	};
	return useQuery(`fetchUserProfile/${id}`, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
