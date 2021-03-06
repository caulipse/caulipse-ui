import EmptyComponent from '@src/app/shared/components/emptyComponents';
import React, { useState } from 'react';
import { IoChevronDown, IoEllipsisVertical } from 'react-icons/io5';
import { AppliedStudy } from '@src/api/types';
import './index.scss';
import MyStudyCard from '@src/app/shared/components/myStudyCard';
import classNames from 'classnames';
import { Box } from '@material-ui/core';
import ProgressBar from '@src/components/common/progress/ProgressBar';
import { useHistory } from 'react-router-dom';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@src/components/common/modal/enum';

interface AppliedStudiesPresenterProps {
	openedAppliedStudies: AppliedStudy[];
	closedAppliedStudies: AppliedStudy[];
}

const AppliedStudiesPresenter = ({
	openedAppliedStudies,
	closedAppliedStudies,
}: AppliedStudiesPresenterProps): JSX.Element => {
	const history = useHistory();
	const { openModal } = useModal();

	const [showClosedAppliedStudies, setShowClosedAppliedStudies] = useState<boolean>(false);

	const findStudies = () => {
		history.push('/');
	};

	const renderAppliedStudies = (isOpen: boolean) => {
		return (isOpen ? openedAppliedStudies : closedAppliedStudies).map((item, index, { length }) => {
			const { isAccepted } = item;

			const LeftTopComponent = () => {
				if (isOpen) {
					return (
						<Box className="applied-studies-chip-con">
							<Box className="applied-studies-chip">D-18</Box>
							<Box className={`applied-studies-chip-${isAccepted ? 'filled' : 'disabled'} ml_25rem`}>
								{isAccepted ? '참가 완료' : '수락 대기중'}
							</Box>
						</Box>
					);
				}
				return (
					<Box className={`applied-studies-chip-${isAccepted ? 'filled' : 'disabled'}`}>
						{isAccepted ? '참가 완료' : '수락 대기중'}
					</Box>
				);
			};

			const RightTopComponent = () => {
				return (
					<IoEllipsisVertical
						className="applied-studies-menu"
						color="#929699"
						onClick={(event: any) => {
							event.preventDefault();
							openModal(ModalKeyEnum.UserStudyMoreModal, item.id);
						}}
					/>
				);
			};

			return (
				<MyStudyCard
					key={item.id}
					studyId={item.id}
					title={item.title}
					views={item.views}
					createdAt={item.createdAt}
					bookmarks={item.bookmarkCount}
					className={classNames({ 'mb-438rem': index !== length - 1 })}
					leftTopComponent={<LeftTopComponent />}
					rightTopComponent={<RightTopComponent />}
					bottomComponent={isOpen ? <ProgressBar current={item.membersCount + 1} max={item.capacity} /> : <div />}
				/>
			);
		});
	};

	return (
		<div className="applied-studies-container">
			<div className="applied-studies-title mt2rem mb16">신청중 ({openedAppliedStudies?.length})</div>
			{openedAppliedStudies?.length === 0 ? (
				<EmptyComponent title="아직 신청중인 스터디가 없어요 :(" buttonText="스터디 찾아보기" onClick={findStudies} />
			) : (
				renderAppliedStudies(true)
			)}
			{showClosedAppliedStudies || (
				<button
					type="button"
					className="recruitedAccordian"
					onClick={() => {
						setShowClosedAppliedStudies(!showClosedAppliedStudies);
					}}
				>
					<div>마감된 항목</div>
					<IoChevronDown className="bookmark-chevron-icon" />
				</button>
			)}
			{showClosedAppliedStudies && (
				<>
					<div className="applied-studies-closed-title">마감된 스터디</div>
					{renderAppliedStudies(false)}
				</>
			)}
		</div>
	);
};

export default AppliedStudiesPresenter;
