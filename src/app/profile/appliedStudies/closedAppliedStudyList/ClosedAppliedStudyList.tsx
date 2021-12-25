import React from 'react';
import { AppliedStudyInterface } from '../../interface/interface';

interface ClosedAppliedStudyListProps {
	closedAppliedStudies: AppliedStudyInterface[];
}

const ClosedAppliedStudyList = ({ closedAppliedStudies }: ClosedAppliedStudyListProps): JSX.Element => {
	return <div>{closedAppliedStudies?.map((item) => item.title)}</div>;
};

export default ClosedAppliedStudyList;
