import { Box } from '@material-ui/core';
import { Study } from '@src/api/types';
import EmptyComponent from '@src/app/shared/components/emptyComponents';
import MyStudyCard from '@src/app/shared/components/myStudyCard';
import { getDday } from '@src/app/shared/utils/date';
import ModalKeyEnum from '@src/components/common/modal/enum';
import useModal from '@src/hooks/modal/useModal';
import React, { useCallback } from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import './index.scss';

interface RecruitingStudiesPresenterProps {
	openedRecruitingStudies: Study[];
	closedRecruitingStudies: Study[];
}

const RecruitingStudiesPresenter = ({
	openedRecruitingStudies,
	closedRecruitingStudies,
}: RecruitingStudiesPresenterProps): JSX.Element => {
	const { openModal } = useModal();

	const closeStudy = useCallback((event: any, id: string) => {
		event.preventDefault();
		openModal(ModalKeyEnum.StudyCloseModal, { id });
	}, []);

	const onClickMore = useCallback((event: any, id: string) => {
		event.preventDefault();
		openModal(ModalKeyEnum.HostStudyMoreModal, { studyId: id });
	}, []);

	const registerStudy = useCallback(() => {
		openModal(ModalKeyEnum.StudyPostModal);
	}, []);

	const renderOpenedRecruitingStudies = useCallback(() => {
		if (openedRecruitingStudies?.length === 0) {
			return (
				<EmptyComponent title="모집중인 스터디가 없어요 :(" buttonText="스터디 등록하기" onClick={registerStudy} />
			);
		}
		return openedRecruitingStudies?.map((item, index, { length }) => {
			return (
				<MyStudyCard
					key={item.id}
					studyId={item.id}
					title={item.title}
					createdAt={item.createdAt}
					views={item.views}
					bookmarks={item.bookmarkCount}
					className={index === length - 1 ? '' : 'mb16'}
					leftTopComponent={<Box className="recruiting-studies-chip">{getDday(item.dueDate)}</Box>}
					rightTopComponent={
						<IoEllipsisVertical
							onClick={(evt) => {
								onClickMore(evt, item.id);
							}}
							className="recruiting-studies-icon"
							color="#b1b1b1"
						/>
					}
				/>
			);
		});
	}, [openedRecruitingStudies, closeStudy, onClickMore, registerStudy]);

	const renderClosedRecruitingStudies = useCallback(() => {
		if (closedRecruitingStudies?.length === 0) return <div />;
		return closedRecruitingStudies?.map((item, index, { length }) => {
			return (
				<MyStudyCard
					key={item.id}
					studyId={item.id}
					title={item.title}
					createdAt={item.createdAt}
					views={item.views}
					bookmarks={item.bookmarkCount}
					isTitleBlur
					className={index === length - 1 ? '' : 'mb16'}
					rightComponent={
						<IoEllipsisVertical
							onClick={(evt) => {
								onClickMore(evt, item.id);
							}}
							className="recruiting-studies-icon"
							size={24}
							color="#b1b1b1"
						/>
					}
				/>
			);
		});
	}, [closedRecruitingStudies, onClickMore]);

	return (
		<div className="recruiting-studies-container">
			<div className="recruiting-studies-title">모집중 ({openedRecruitingStudies?.length})</div>
			{renderOpenedRecruitingStudies()}
			<div className="recruiting-studies-title-blurred">마감된 스터디</div>
			{renderClosedRecruitingStudies()}
		</div>
	);
};

export default RecruitingStudiesPresenter;
