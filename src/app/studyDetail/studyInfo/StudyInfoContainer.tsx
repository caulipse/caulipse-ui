import React from 'react';
import StudyInfoPresenter from './StudyInfoPresenter';

interface StudyInfoContainerProps {
	// Todo: category type 확정되면 category 지정하기
	// code: string;
	weekday: string|undefined;
	frequency: string|undefined;
	location: string|undefined;
}
const StudyInfoContainer = ({ weekday, frequency, location }: StudyInfoContainerProps): JSX.Element => {
	return <StudyInfoPresenter weekday={weekday} frequency={frequency} location={location} />;
};

export default StudyInfoContainer;
