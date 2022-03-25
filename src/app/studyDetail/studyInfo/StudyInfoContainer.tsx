import React from 'react';
import StudyInfoPresenter from './StudyInfoPresenter';

interface StudyInfoContainerProps {
	categoryCode: string;
	weekday: string;
	frequency: string;
	location: string;
}
const StudyInfoContainer = ({ categoryCode, weekday, frequency, location }: StudyInfoContainerProps): JSX.Element => {
	return <StudyInfoPresenter categoryCode={categoryCode} weekday={weekday} frequency={frequency} location={location} />;
};

export default StudyInfoContainer;
