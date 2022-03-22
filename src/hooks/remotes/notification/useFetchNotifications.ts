import API from '@src/api';
import { useQuery } from 'react-query';
import QUERY_KEY from '..';

export default () => {
	const fetcher = async (): Promise<any> => {
		const res = await API.getUserNotifications();
		return res.data;
	};
	return useQuery(QUERY_KEY.FETCH_NOTIFICATIONS, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
