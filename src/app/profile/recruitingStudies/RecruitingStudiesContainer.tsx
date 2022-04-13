import React, { useEffect } from 'react';
import useFetchMyStudies from '@src/hooks/remotes/user/useFetchMyStudies';
import Loader from '@src/components/common/loader/Loader';
import RecruitingStudiesPresenter from './RecruitingStudiesPresenter';

const RecruitingStudiesContainer = (): JSX.Element => {
	const { data, isLoading } = useFetchMyStudies();

	const openedRecruitingStudies = data?.studies.filter((item) => new Date(item.dueDate) >= new Date());
	const closedRecruitingStudies = data?.studies.filter((item) => new Date(item.dueDate) < new Date());

	if (isLoading) return <Loader />;

	return openedRecruitingStudies && closedRecruitingStudies ? (
		<RecruitingStudiesPresenter
			openedRecruitingStudies={openedRecruitingStudies}
			closedRecruitingStudies={closedRecruitingStudies}
		/>
	) : (
		<div />
	);
};

export default RecruitingStudiesContainer;
