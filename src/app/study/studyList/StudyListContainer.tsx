import React, { memo } from 'react';
import fetchStudies from '@src/hooks/remotes/study/useFetchStudies';
import Loader from '@common/loader/Loader';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import StudyListPresenter from './StudyListPresenter';

const StudyListContainter = (): JSX.Element => {
	const [state] = useAtom(studyListState);
	const { data, isLoading } = fetchStudies(state?.sortOption?.value, state?.filterOption);
	return isLoading ? <Loader /> : <StudyListPresenter data={data?.studies} />;
};

export default memo(StudyListContainter);
