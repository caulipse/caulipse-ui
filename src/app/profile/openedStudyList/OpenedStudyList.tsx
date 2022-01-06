import React from 'react';
import { AppliedStudyInterface } from '../interface/interface';
import './index.scss';
import OpenedAppliedStudyItem from './OpenedStudyItem';

interface OpenedStudyListProps {
	openedStudies: AppliedStudyInterface[];
}

const OpenedStudyList = ({ openedStudies }: OpenedStudyListProps): JSX.Element => {
	return (
		<div>
			{openedStudies?.map((item, index, { length }) => {
				return (
					<div className={index === length - 1 ? '' : 'mb16'} key={item.studyId}>
						<OpenedAppliedStudyItem openedStudyItem={item} />
					</div>
				);
			})}
		</div>
	);
};

export default OpenedStudyList;
