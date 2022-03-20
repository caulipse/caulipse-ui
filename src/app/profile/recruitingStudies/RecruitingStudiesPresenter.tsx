import { Study } from '@src/api/types';
import EmptyComponent from '@src/app/shared/components/emptyComponents';
import MyStudyCard from '@src/app/shared/components/myStudyCard';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import Chip from '@src/components/common/chip/Chip';
import { ChipTypeEnum } from '@src/components/common/chip/types';
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

	const closeStudy = useCallback((event: any) => {
		event.preventDefault();
		openModal(ModalKeyEnum.StudyCloseModal);
	}, []);

	const onClickMore = useCallback((event: any) => {
		event.preventDefault();
		openModal(ModalKeyEnum.UserStudyMoreModal);
	}, []);

	const registerStudy = useCallback(() => {
		// TODO: 스터디 등록하기 페이지 가도록 추가하기
	}, []);

	const renderOpenedRecruitingStudies = useCallback(() => {
		if (openedRecruitingStudies?.length === 0) {
			return <EmptyComponent title="모집중인 스터디가 없네요" buttonText="스터디 등록하기" onClick={registerStudy} />;
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
					leftTopComponent={
						<div>
							<Chip selected label="D-18" type={ChipTypeEnum.secondary} />
						</div>
					}
					rightTopComponent={
						<IoEllipsisVertical onClick={onClickMore} className="recruiting-studies-icon" color="#b1b1b1" />
					}
					bottomComponent={
						<div className="mt1rem">
							<CommonButton
								onClick={closeStudy}
								title={`마감하기(${item.membersCount}/${item.capacity})`}
								type={ButtonTypeEnum.primary}
							/>
						</div>
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
						<IoEllipsisVertical onClick={onClickMore} className="recruiting-studies-icon" size={24} color="#b1b1b1" />
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
