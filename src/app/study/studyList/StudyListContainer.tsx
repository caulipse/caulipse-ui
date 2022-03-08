import React from 'react';
import fetchStudies from '@src/hooks/remotes/study/useFetchStudies';
import Loader from '@common/loader/Loader';
import StudyListPresenter from './StudyListPresenter';

const StudyListContainter = (): JSX.Element => {
	const { data, isLoading } = fetchStudies();
	return isLoading ? <Loader /> : <StudyListPresenter data={data?.studies} />;
};

export default StudyListContainter;
