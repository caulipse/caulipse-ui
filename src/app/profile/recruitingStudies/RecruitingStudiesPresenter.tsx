import { Study } from '@src/api/types';
import MyStudyCard from '@src/app/shared/components/myStudyCard';
import Chip from '@src/components/common/chip/Chip';
import { ChipTypeEnum } from '@src/components/common/chip/types';
import ModalKeyEnum from '@src/components/common/modal/enum';
import useModal from '@src/hooks/modal/useModal';
import React from 'react';
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

	const closeStudy = () => {
		openModal(ModalKeyEnum.StudyCloseModal);
	};

	const onClickMore = (event: any) => {
		event.preventDefault();
		openModal(ModalKeyEnum.UserStudyMoreModal);
	};

	return (
		<div className="recruiting-studies-container">
			<div className="recruiting-studies-title">모집중 ({openedRecruitingStudies?.length})</div>
			{openedRecruitingStudies?.map((item, index, { length }) => {
				return (
					<MyStudyCard
						key={item.id}
						studyId={item.id}
						title={item.title}
						createdAt={item.createdAt}
						views={item.views}
						bookmarks={0}
						className={index === length - 1 ? '' : 'mb16'}
						leftTopComponent={
							<div>
								<Chip selected label="D-18" type={ChipTypeEnum.secondary} />
							</div>
						}
						rightTopComponent={
							<IoEllipsisVertical onClick={onClickMore} className="recruiting-studies-icon" color="#b1b1b1" />
						}
					/>
				);
			})}
			<div className="recruiting-studies-title-blurred">마감된 스터디</div>
			{closedRecruitingStudies?.map((item, index, { length }) => {
				return (
					<MyStudyCard
						key={item.id}
						studyId={item.id}
						title={item.title}
						createdAt={item.createdAt}
						views={item.views}
						bookmarks={0}
						isTitleBlur
						className={index === length - 1 ? '' : 'mb16'}
						rightComponent={
							<IoEllipsisVertical onClick={onClickMore} className="recruiting-studies-icon" size={24} color="#b1b1b1" />
						}
					/>
				);
			})}
		</div>
	);
};

export default RecruitingStudiesPresenter;
