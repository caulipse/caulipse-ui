import React from 'react';
import { BookmarkInterface } from '../interface/interface';

interface AppliedStudiesPresenterProps {
	openedAppliedStudies: BookmarkInterface[];
	closedAppliedStudies: BookmarkInterface[];
}

const AppliedStudiesPresenter = ({
	openedAppliedStudies,
	closedAppliedStudies,
}: AppliedStudiesPresenterProps): JSX.Element => {
	return <div>AppliedStudiesPresenter</div>;
};

export default AppliedStudiesPresenter;
