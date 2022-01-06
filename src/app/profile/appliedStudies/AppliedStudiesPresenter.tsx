import EmptyComponent from '@src/app/shared/components/emptyComponents';
import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { AppliedStudyInterface } from '../interface/interface';
import ClosedStudyList from '../closedStudyList/ClosedStudyList';
import './index.scss';
import OpenedStudyList from '../openedStudyList/OpenedStudyList';

interface AppliedStudiesPresenterProps {
	openedAppliedStudies: AppliedStudyInterface[];
	closedAppliedStudies: AppliedStudyInterface[];
}

const AppliedStudiesPresenter = ({
	openedAppliedStudies,
	closedAppliedStudies,
}: AppliedStudiesPresenterProps): JSX.Element => {
	const [showClosedAppliedStudies, setShowClosedAppliedStudies] = useState<boolean>(false);

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
					<OpenedStudyList openedStudies={openedAppliedStudies} />
				</div>
			)}
			<div className="applied-studies-accordian-container">
				<div className="applied-studies-accordian-text">마감된 항목</div>
				<button type="button" onClick={() => setShowClosedAppliedStudies(!showClosedAppliedStudies)}>
					{showClosedAppliedStudies ? (
						<IoChevronDown size={24} color="#929699" />
					) : (
						<IoChevronUp size={24} color="#929699" />
					)}
				</button>
			</div>
			{showClosedAppliedStudies && (
				<>
					<div className="applied-studies-closed-title">마감된 스터디</div>
					<div className="applied-studies-closed-list-container">
						<ClosedStudyList closedStudies={closedAppliedStudies} />
					</div>
				</>
			)}
		</div>
	);
};

export default AppliedStudiesPresenter;
