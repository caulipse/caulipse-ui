import API from '@src/api';
import { IResponseGetNotifications } from '@src/api/response/notification';
import { useQuery } from 'react-query';
import QUERY_KEY from '..';

export default () => {
	const fetcher = async (): Promise<IResponseGetNotifications> => {
		const res = await API.getUserNotifications();
		return res.data;
	};
	return useQuery(QUERY_KEY.FETCH_NOTIFICATIONS, fetcher, {
		onError: (e) => {
			window.alert('알림 목록 조회에 실패하였습니다.');
			console.log(e);
		},
	});
};
