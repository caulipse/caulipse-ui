import EmptyComponent from '@src/app/shared/components/emptyComponents';
import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { AppliedStudy } from '@src/api/types';
import './index.scss';
import MyStudyCard from '@src/app/shared/components/myStudyCard';
import classNames from 'classnames';
import { Box } from '@material-ui/core';
import ProgressBar from '@src/components/common/progress/ProgressBar';

interface AppliedStudiesPresenterProps {
	openedAppliedStudies: AppliedStudy[];
	closedAppliedStudies: AppliedStudy[];
}

const AppliedStudiesPresenter = ({
	openedAppliedStudies,
	closedAppliedStudies,
}: AppliedStudiesPresenterProps): JSX.Element => {
	const [showClosedAppliedStudies, setShowClosedAppliedStudies] = useState<boolean>(false);

	const findStudies = () => {
		console.log('findStudies');
	};

	const renderOpenedAppliedStudies = () => {
		return openedAppliedStudies.map((item, index, { length }) => {
			// TODO: 참가 여부에 따라서 다르게 표시
			const isAccepted = index % 2 === 0;

			return (
				<MyStudyCard
					key={item.id}
					studyId={item.id}
					title={item.title}
					views={item.views}
					createdAt={item.createdAt}
					bookmarks={item.bookmarkCount}
					className={classNames({ 'mb-438rem': index !== length - 1 })}
					leftTopComponent={
						<Box className="applied-studies-chip-con">
							<Box className="applied-studies-chip">D-18</Box>
							<Box className={`applied-studies-chip-${isAccepted ? 'filled' : 'disabled'} ml_25rem`}>
								{isAccepted ? '참가 완료' : '수락 대기중'}
							</Box>
						</Box>
					}
					// ProgressBar에 current와 max 값
					bottomComponent={<ProgressBar current={4} max={8} />}
				/>
			);
		});
	};

	const renderClosedAppliedStudies = () => {
		return closedAppliedStudies.map((item, index, { length }) => {
			// TODO: 참가 여부에 따라서 다르게 표시
			const isAccepted = index % 2 === 0;

			return (
				<MyStudyCard
					key={item.id}
					studyId={item.id}
					title={item.title}
					views={item.views}
					createdAt={item.createdAt}
					bookmarks={item.bookmarkCount}
					className={classNames({ 'mb-438rem': index !== length - 1 })}
					leftTopComponent={
						<Box className={`applied-studies-chip-${isAccepted ? 'filled' : 'disabled'}`}>
							{isAccepted ? '참가 완료' : '수락 대기중'}
						</Box>
					}
					// ProgressBar에 current와 max 값
					bottomComponent={<ProgressBar current={4} max={8} />}
				/>
			);
		});
	};

	return (
		<div className="applied-studies-container">
			<div className="applied-studies-title mt40 mb16">신청중 ({openedAppliedStudies?.length})</div>
			{openedAppliedStudies?.length === 0 ? (
				<EmptyComponent title="신청중인 스터디가 없습니다" buttonText="스터디 찾아보기" onClick={findStudies} />
			) : (
				renderOpenedAppliedStudies()
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
					{renderClosedAppliedStudies()}
				</>
			)}
		</div>
	);
};

export default AppliedStudiesPresenter;
