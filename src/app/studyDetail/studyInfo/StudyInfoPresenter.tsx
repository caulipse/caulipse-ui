import { getMainCategoryLabel, getSubCategoryLabel } from '@src/app/shared/utils/category';
import React from 'react';
import './styles.scss';

interface StudyInfoPresenterProps {
	categoryCode: string;
	weekday: string;
	frequency: string;
	location: string;
}
const StudyInfoPresenter = ({ categoryCode, weekday, frequency, location }: StudyInfoPresenterProps): JSX.Element => {
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
					<div className="study-sub-info-content">{weekday}</div>
				</div>
				<div className="mr16">
					<div className="study-sub-info-title">빈도</div>
					<div className="study-sub-info-content">{frequency}</div>
				</div>
				<div>
					<div className="study-sub-info-title">장소</div>
					<div className="study-sub-info-content">{location}</div>
				</div>
			</div>
		</div>
	);
};

export default StudyInfoPresenter;
