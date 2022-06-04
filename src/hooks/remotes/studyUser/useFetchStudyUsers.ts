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
			window.alert('참가신청 수락대기 중인 인원 목록 조회에 실패하였습니다.');
			console.log(e);
		},
	});
};
