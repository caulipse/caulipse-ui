import { useQuery } from 'react-query';
import API from '@src/api';
import { IResponseGetStudyUsers } from '@api/response/study';
import QUERY_KEY from '@src/hooks/remotes';

export default (id: string) => {
	const fetcher = async (): Promise<IResponseGetStudyUsers> => {
		const res = await API.getStudyParticipants(id);
		return res.data;
	};

	return useQuery(`${QUERY_KEY.FETCH_STUDY_PARTICIPANTS}/${id}`, fetcher, {
		onError: (e) => {
			window.alert('스터디 참가자 중인 사용자 목록 조회에 실패하였습니다.');
			console.log(e);
		},
	});
};
