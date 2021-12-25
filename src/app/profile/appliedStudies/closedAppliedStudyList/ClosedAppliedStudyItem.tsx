import React from 'react';
import { AppliedStudyInterface } from '../../interface/interface';

interface ClosedAppliedStudyItemProps {
	closedAppliedStudyItem: AppliedStudyInterface;
}

const ClosedAppliedStudyItem = ({ closedAppliedStudyItem }: ClosedAppliedStudyItemProps): JSX.Element => {
	return <div>{closedAppliedStudyItem.title}</div>;
};

export default ClosedAppliedStudyItem;
