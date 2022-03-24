import useFetchAppliedStudies from '@src/hooks/remotes/user/useFetchAppliedStudies';
import * as Factory from 'factory.ts';
import React from 'react';
import { AppliedStudyInterface } from '../interface/interface';
import AppliedStudiesPresenter from './AppliedStudiesPresenter';

const AppliedStudiesContainer = (): JSX.Element => {
	const getAppliedStudiesData = (iter: number) => {
		const appliedStudiesFactory = Factory.Sync.makeFactory<AppliedStudyInterface>({
			studyId: Factory.each((i) => i),
			title: '제목입니다.',
			currentNumber: 1,
			maxNumber: 10,
			date: new Date(),
			hits: 5,
			bookmarks: 5,
			status: Factory.each((i) => (i > 2 ? 'accepted' : 'waiting')),
		});
		return appliedStudiesFactory.buildList(iter);
	};

	const { data, isLoading } = useFetchAppliedStudies();

	console.log(data);

	return (
		<div>
			<AppliedStudiesPresenter
				openedAppliedStudies={getAppliedStudiesData(5)}
				closedAppliedStudies={getAppliedStudiesData(3)}
			/>
		</div>
	);
};

export default AppliedStudiesContainer;
