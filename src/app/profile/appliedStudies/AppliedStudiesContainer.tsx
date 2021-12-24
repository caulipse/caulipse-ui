import { useAppDispatch, useAppSelector } from '@src/hooks/appRedux';
import { setAppliedStudies } from '@src/store/modules/user';
import * as Factory from 'factory.ts';
import React, { useEffect } from 'react';
import { AppliedStudyInterface } from '../interface/interface';
import AppliedStudiesPresenter from './AppliedStudiesPresenter';

const AppliedStudiesContainer = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const appliedStudies = useAppSelector((state) => state.user.appliedStudies);

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

	useEffect(() => {
		dispatch(
			setAppliedStudies({
				openedAppliedStudies: getAppliedStudiesData(5),
				closedAppliedStudies: getAppliedStudiesData(5),
			})
		);
	}, []);

	return (
		<div>
			<AppliedStudiesPresenter
				openedAppliedStudies={appliedStudies?.openedAppliedStudies}
				closedAppliedStudies={appliedStudies?.closedAppliedStudies}
			/>
		</div>
	);
};

export default AppliedStudiesContainer;
