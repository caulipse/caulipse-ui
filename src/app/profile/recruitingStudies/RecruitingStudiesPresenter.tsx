import React from 'react';
import ClosedStudyList from '../closedStudyList/ClosedStudyList';
import { AppliedStudyInterface } from '../interface/interface';
import OpenedStudyList from '../openedStudyList/OpenedStudyList';
import './index.scss';

interface RecruitingStudiesPresenterProps {
	openedRecruitingStudies: AppliedStudyInterface[];
	closedRecruitingStudies: AppliedStudyInterface[];
}

const RecruitingStudiesPresenter = ({
	openedRecruitingStudies,
	closedRecruitingStudies,
}: RecruitingStudiesPresenterProps): JSX.Element => {
	return (
		<div className="recruiting-studies-container">
			<div className="recruiting-studies-title">모집중 ({openedRecruitingStudies?.length})</div>
			<OpenedStudyList openedStudies={openedRecruitingStudies} />
			<div className="recruiting-studies-title">마감한 스터디</div>
			<div className="recruiting-studies-closed-container">
				<ClosedStudyList closedStudies={closedRecruitingStudies} />
			</div>
		</div>
	);
};

export default RecruitingStudiesPresenter;
