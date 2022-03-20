import React, { useEffect } from 'react';
import useFetchMyStudies from '@src/hooks/remotes/user/useFetchMyStudies';
import Loader from '@src/components/common/loader/Loader';
import RecruitingStudiesPresenter from './RecruitingStudiesPresenter';

const RecruitingStudiesContainer = (): JSX.Element => {
	const { data, isLoading } = useFetchMyStudies();

	if (isLoading) return <Loader />;

	return data?.studies ? (
		<RecruitingStudiesPresenter openedRecruitingStudies={data?.studies} closedRecruitingStudies={data?.studies} />
	) : (
		<div />
	);
};

export default RecruitingStudiesContainer;
