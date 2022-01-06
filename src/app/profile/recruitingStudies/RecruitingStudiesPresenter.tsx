import React from 'react';
import { AppliedStudyInterface } from '../interface/interface';
import './index.scss';

interface RecruitingStudiesPresenterProps{
    openedRecruitingStudies:AppliedStudyInterface[],
    closedRecruitingStudies:AppliedStudyInterface[],
}

const RecruitingStudiesPresenter = ({
    openedRecruitingStudies,
    closedRecruitingStudies,
}:RecruitingStudiesPresenterProps): JSX.Element => {
	return (
		<div className="recruiting-studies-container">
			<div>모집중 ({openedRecruitingStudies?.length})</div>
		</div>
	);
};

export default RecruitingStudiesPresenter;
