import React from 'react';
import { Study } from '@api/types';
import './styles.scss';

interface PresenterProps {
	study: Study;
}
const StudyCardPresenter = ({ study }: PresenterProps): JSX.Element => (
	<div className="studyCard-con">
		<div className="studyCard-wrap">
			<div className="studyCard-categoryAndcapacity-title">
				<span>category</span>
				<span>모집 인원</span>
			</div>
			<div className="studyCard-titleAndCapacity-value">
				<span>{study.title}</span>
				<div>
					{study.vacancy}/{study.capacity}
				</div>
			</div>
			<div className="studyCard-progressbar-con">
				<progress max={study.capacity} value={study.vacancy} className="studyCard-progresbar" />
			</div>
			<div className="studyCard-subInfo-con">
				<div>sub info</div>
				<div>dfdfd</div>
			</div>
		</div>
	</div>
);

export default StudyCardPresenter;
