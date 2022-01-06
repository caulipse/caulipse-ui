import React from 'react';
import { AppliedStudyInterface } from '../interface/interface';
import './index.scss';
import OpenedAppliedStudyItem from './OpenedAppliedStudyItem';

interface OpenedAppliedStudyListProps {
	openedAppliedStudies: AppliedStudyInterface[];
}

const OpenedAppliedStudyList = ({ openedAppliedStudies }: OpenedAppliedStudyListProps): JSX.Element => {
	return (
		<div>
			{openedAppliedStudies?.map((item, index, { length }) => {
				return (
					<div className={index === length - 1 ? '' : 'mb16'} key={item.studyId}>
						<OpenedAppliedStudyItem openedAppliedStudyItem={item} />
					</div>
				);
			})}
		</div>
	);
};

export default OpenedAppliedStudyList;
