import React, { useEffect } from 'react';
import * as Factory from 'factory.ts';
import RecruitingStudiesPresenter from './RecruitingStudiesPresenter';
import { AppliedStudyInterface } from '../interface/interface';

const RecruitingStudiesContainer = (): JSX.Element => {
	const getRecruitingStudiesData = (iter: number, status: string) => {
		const recruitingStudiesFactory = Factory.Sync.makeFactory<AppliedStudyInterface>({
			studyId: Factory.each((i) => i),
			title: '제목입니다.',
			currentNumber: 1,
			maxNumber: 10,
			date: new Date(),
			hits: 5,
			bookmarks: 5,
			status,
		});
		return recruitingStudiesFactory.buildList(iter);
	};

	return (
		<div>
			<RecruitingStudiesPresenter
				openedRecruitingStudies={getRecruitingStudiesData(5, 'recruiting')}
				closedRecruitingStudies={getRecruitingStudiesData(3, 'closed')}
			/>
		</div>
	);
};

export default RecruitingStudiesContainer;
