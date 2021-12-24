import React from 'react';
import { BookmarkInterface } from '../../interface/interface';
import './index.scss';
import OpenedAppliedStudyItem from './OpenedAppliedStudyItem';

interface OpenedAppliedStudyListProps {
	openedAppliedStudies: BookmarkInterface[];
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
