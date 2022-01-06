import React from 'react';
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
        </div>
	);
};

export default RecruitingStudiesPresenter;
