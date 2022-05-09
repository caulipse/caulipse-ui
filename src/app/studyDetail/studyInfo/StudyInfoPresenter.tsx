import { frequencyEnum, locationEnum, weekdayEnum } from '@src/api/types';
import { getMainCategoryLabel, getSubCategoryLabel } from '@src/app/shared/utils/category';
import { frequencyMapper, locationMapper, weekdayMapper } from '@src/app/shared/utils/studyMapper';
import React from 'react';
import './styles.scss';

interface StudyInfoPresenterProps {
	categoryCode: string;
	weekdays: weekdayEnum[];
	frequency: frequencyEnum;
	locations: locationEnum[];
}
const StudyInfoPresenter = ({ categoryCode, weekdays, frequency, locations }: StudyInfoPresenterProps): JSX.Element => {
	return (
		<div className="StudyInfoContainer">
			<div className="categoryTextContainer">
				<div className="category">카테고리</div>
				<div className="categoryDetail">
					<span>
						{getMainCategoryLabel(Number(categoryCode))} &gt; {getSubCategoryLabel(Number(categoryCode))}
					</span>
				</div>
			</div>
			<div className="study-sub-info-container">
				<div className="mr16">
					<div className="study-sub-info-title">요일</div>
					<div className="study-sub-info-content">{weekdays.map((item) => weekdayMapper[item]).join(',')}</div>
				</div>
				<div className="mr16">
					<div className="study-sub-info-title">빈도</div>
					<div className="study-sub-info-content">{frequencyMapper[frequency]}</div>
				</div>
				<div>
					<div className="study-sub-info-title">장소</div>
					<div className="study-sub-info-content-con">
						{locations.map((locationItem) => {
							return (
								<div key={locationItem} className="study-sub-info-content">
									{locationMapper[locationItem]}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudyInfoPresenter;
