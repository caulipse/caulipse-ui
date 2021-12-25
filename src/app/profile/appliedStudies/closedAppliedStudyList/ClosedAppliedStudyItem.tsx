import React from 'react';
import { AppliedStudyInterface } from '../../interface/interface';
import './index.scss';

interface ClosedAppliedStudyItemProps {
	closedAppliedStudyItem: AppliedStudyInterface;
}

const ClosedAppliedStudyItem = ({ closedAppliedStudyItem }: ClosedAppliedStudyItemProps): JSX.Element => {
	return <div className="closed-applied-study-item-container"><div>{closedAppliedStudyItem.title}</div><div>참여완료</div></div>;
};

export default ClosedAppliedStudyItem;
