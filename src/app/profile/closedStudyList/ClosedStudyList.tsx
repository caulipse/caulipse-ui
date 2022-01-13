import React from 'react';
import { AppliedStudyInterface } from '../interface/interface';
import ClosedStudyItem from './ClosedStudyItem';
import './index.scss';

interface closedStudyListProps {
	closedStudies: AppliedStudyInterface[];
}

const ClosedStudyList = ({ closedStudies }: closedStudyListProps): JSX.Element => {
	return (
		<div>
			{closedStudies?.map((item) => (
				<ClosedStudyItem key={item.studyId} closedStudyItem={item} />
			))}
		</div>
	);
};

export default ClosedStudyList;
