import React from 'react';
import { Study } from '@api/types';
import './styles.scss';

interface StudyInfoPresenterProps {
	study: Study;
}
const StudyInfoPresenter = ({ study }: StudyInfoPresenterProps): JSX.Element => (
	<div className="StudyInfoContainer">
		<div className="categoryTextContainer">
			<div className="category">카테고리</div>
			<div className="categoryDetail">
				<span>{study.categoryCode!.code}</span>
			</div>
		</div>

		<div className="study-sub-info-container">
			<div className="mr16">
				<div className="study-sub-info-title">요일</div>
				<div className="study-sub-info-content">{study.weekday}</div>
			</div>
			<div className="mr16">
				<div className="study-sub-info-title">빈도</div>
				<div className="study-sub-info-content">{study.frequency}</div>
			</div>
			<div>
				<div className="study-sub-info-title">장소</div>
				<div className="study-sub-info-content">{study.location}</div>
			</div>
		</div>
	</div>
);

export default StudyInfoPresenter;
