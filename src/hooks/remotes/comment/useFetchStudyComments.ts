import API from '@src/api';
import { IResponseGetStudyComments } from '@src/api/response/studyComment';
import { useQuery } from 'react-query';
import QUERY_KEY from '..';

export default (studyId: string) => {
	const fetcher = async (): Promise<IResponseGetStudyComments> => {
		const res = await API.getStudyComments(studyId);
		return res.data;
	};
	return useQuery(QUERY_KEY.FETCH_STUDY_COMMENTS, fetcher, {
		onError: (e) => {
			console.log(e);
		},
	});
};
