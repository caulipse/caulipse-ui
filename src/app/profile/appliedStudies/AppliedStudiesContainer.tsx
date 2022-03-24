import Loader from '@src/components/common/loader/Loader';
import useFetchAppliedStudies from '@src/hooks/remotes/user/useFetchAppliedStudies';
import React from 'react';
import AppliedStudiesPresenter from './AppliedStudiesPresenter';

const AppliedStudiesContainer = (): JSX.Element => {
	const { data, isLoading } = useFetchAppliedStudies();

	if (isLoading) return <Loader />;

	return <div>{data && <AppliedStudiesPresenter openedAppliedStudies={data} closedAppliedStudies={data} />}</div>;
};

export default AppliedStudiesContainer;
