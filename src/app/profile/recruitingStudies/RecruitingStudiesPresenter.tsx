import { Study } from '@src/api/types';
import MyStudyCard from '@src/app/shared/components/myStudyCard';
import React from 'react';
import './index.scss';

interface RecruitingStudiesPresenterProps {
	openedRecruitingStudies: Study[];
	closedRecruitingStudies: Study[];
}

const RecruitingStudiesPresenter = ({
	openedRecruitingStudies,
	closedRecruitingStudies,
}: RecruitingStudiesPresenterProps): JSX.Element => {
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
					/>
				);
			})}
		</div>
	);
};

export default RecruitingStudiesPresenter;
