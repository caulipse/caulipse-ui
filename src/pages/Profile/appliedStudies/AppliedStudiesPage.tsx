import AppliedStudiesContainer from '@src/app/profile/appliedStudies/AppliedStudiesContainer';
import React from 'react';
import './AppliedStudiesPage.scss';

const AppliedStudiesPage = (): JSX.Element => {
	return (
		<div className="applied-studies-page-bg">
			<div className="applied-studies-page-container">
				<AppliedStudiesContainer />
			</div>
		</div>
	);
};

export default AppliedStudiesPage;
