import React, { useEffect } from 'react';
import useFetchMyStudies from '@src/hooks/remotes/user/useFetchMyStudies';
import Loader from '@src/components/common/loader/Loader';
import { isFuture, isPast, isToday } from 'date-fns';
import RecruitingStudiesPresenter from './RecruitingStudiesPresenter';

const RecruitingStudiesContainer = (): JSX.Element => {
	const { data, isLoading } = useFetchMyStudies();

	const openedRecruitingStudies = data?.filter(
		(item) =>
			isToday(new Date(item?.dueDate)) || (!isToday(new Date(item?.dueDate)) && isFuture(new Date(item?.dueDate)))
	);
	const closedRecruitingStudies = data?.filter(
		(item) => !isToday(new Date(item?.dueDate)) && isPast(new Date(item?.dueDate))
	);

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
