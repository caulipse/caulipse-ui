import API from '@src/api';
import { IResponseGetBookmarks } from '@src/api/response/bookmark';
import { useQuery } from 'react-query';
import QUERY_KEY from '..';

export default () => {
	const fetcher = async (): Promise<IResponseGetBookmarks> => {
		const res = await API.getBookmarks();
		return res.data;
	};
	return useQuery(QUERY_KEY.FETCH_BOOKMARKS, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
