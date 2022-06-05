import React, { useEffect } from 'react';
import useFetchMyStudies from '@src/hooks/remotes/user/useFetchMyStudies';
import Loader from '@src/components/common/loader/Loader';
import RecruitingStudiesPresenter from './RecruitingStudiesPresenter';

const RecruitingStudiesContainer = (): JSX.Element => {
	const { data, isLoading } = useFetchMyStudies();

	const openedRecruitingStudies = data?.filter((item) => item.isOpen);
	const closedRecruitingStudies = data?.filter((item) => !item.isOpen);

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
