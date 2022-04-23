import { frequencyEnum, locationEnum, weekdayEnum } from '@src/api/types';
import React from 'react';
import StudyInfoPresenter from './StudyInfoPresenter';

interface StudyInfoContainerProps {
	categoryCode: string;
	weekday: weekdayEnum;
	frequency: frequencyEnum;
	location: locationEnum;
}
const StudyInfoContainer = ({ categoryCode, weekday, frequency, location }: StudyInfoContainerProps): JSX.Element => {
	return <StudyInfoPresenter categoryCode={categoryCode} weekday={weekday} frequency={frequency} location={location} />;
};

export default StudyInfoContainer;
