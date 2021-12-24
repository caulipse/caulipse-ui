import EmptyComponent from '@src/app/shared/components/emptyComponents';
import React from 'react';
import { BookmarkInterface } from '../interface/interface';
import './index.scss';
import OpenedAppliedStudyList from './openedAppliedStudyList/OpenedAppliedStudyList';

interface AppliedStudiesPresenterProps {
	openedAppliedStudies: BookmarkInterface[];
	closedAppliedStudies: BookmarkInterface[];
}

const AppliedStudiesPresenter = ({
	openedAppliedStudies,
	closedAppliedStudies,
}: AppliedStudiesPresenterProps): JSX.Element => {
	const findStudies = () => {
		console.log('findStudies');
	};

	return (
		<div className="applied-studies-container">
			<div className="applied-studies-title mt40 mb16">신청중 ({openedAppliedStudies?.length})</div>
			{openedAppliedStudies?.length === 0 ? (
				<EmptyComponent title="신청중인 스터디가 없습니다" buttonText="스터디 찾아보기" onClick={findStudies} />
			) : (
				<div>
					<OpenedAppliedStudyList openedAppliedStudies={openedAppliedStudies} />
				</div>
			)}
		</div>
	);
};

export default AppliedStudiesPresenter;
