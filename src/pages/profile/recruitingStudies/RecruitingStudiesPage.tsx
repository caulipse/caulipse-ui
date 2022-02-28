import RecruitingStudiesContainer from '@src/app/profile/recruitingStudies/RecruitingStudiesContainer';
import React from 'react';
import './RecruitingStudiesPage.scss';

const RecruitingStudiesPage = (): JSX.Element => {
	return (
		<div className="recruiting-studies-page-bg">
			<div className="recruiting-studies-page-container">
				<RecruitingStudiesContainer />
			</div>
		</div>
	);
};

export default RecruitingStudiesPage;
