import React from 'react';
import './styles.scss';

interface StudyInfoPresenterProps {
	// code: string;
	weekday: string | undefined;
	frequency: string | undefined;
	location: string | undefined;
}
const StudyInfoPresenter = ({ weekday, frequency, location }: StudyInfoPresenterProps): JSX.Element => (
	<div className="StudyInfoContainer">
		<div className="categoryTextContainer">
			<div className="category">카테고리</div>
			<div className="categoryDetail">
				{/* Todo: 카테고리 정보 들어가야 함 */}
				<span>category</span>
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

export default StudyInfoPresenter;
