import { useQuery } from 'react-query';
import API from '@src/api';
import { IResponseGetStudy } from '@api/response/study';
import QUERY_KEY from '@src/hooks/remotes';

export default (id: string, login: boolean) => {
	const fetcher = async (): Promise<IResponseGetStudy> => {
		const res = await API.getStudy(id, login);
		return res.data;
	};

	return useQuery(`${QUERY_KEY.FETCH_STUDY}/${id}`, fetcher, {
		onError: (e) => {
			window.alert('스터디 조회에 실패하였습니다.');
			console.log(e);
		},
	});
};
