import React from 'react';
import { AppliedStudyInterface } from '../interface/interface';
import ClosedStudyItem from './ClosedStudyItem';
import './index.scss';

interface closedStudyListProps {
	closedAppliedStudies: AppliedStudyInterface[];
}

const closedStudyList = ({ closedAppliedStudies }: closedStudyListProps): JSX.Element => {
	return (
		<div>
			{closedAppliedStudies?.map((item) => (
				<ClosedStudyItem key={item.studyId} closedStudyItem={item} />
			))}
		</div>
	);
};

export default closedStudyList;
