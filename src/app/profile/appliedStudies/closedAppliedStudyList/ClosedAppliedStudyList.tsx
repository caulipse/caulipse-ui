import React from 'react';
import { AppliedStudyInterface } from '../../interface/interface';
import ClosedAppliedStudyItem from './ClosedAppliedStudyItem';
import './index.scss';

interface ClosedAppliedStudyListProps {
	closedAppliedStudies: AppliedStudyInterface[];
}

const ClosedAppliedStudyList = ({ closedAppliedStudies }: ClosedAppliedStudyListProps): JSX.Element => {
	return (
		<div>
			{closedAppliedStudies?.map((item) => (
				<ClosedAppliedStudyItem key={item.studyId} closedAppliedStudyItem={item} />
			))}
		</div>
	);
};

export default ClosedAppliedStudyList;
