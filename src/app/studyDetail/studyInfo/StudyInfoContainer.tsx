import { frequencyEnum, locationEnum, weekdayEnum } from '@src/api/types';
import React from 'react';
import StudyInfoPresenter from './StudyInfoPresenter';

interface StudyInfoContainerProps {
	categoryCode: string;
	weekdays: weekdayEnum[];
	frequency: frequencyEnum;
	locations: locationEnum[];
}
const StudyInfoContainer = ({ categoryCode, weekdays, frequency, locations }: StudyInfoContainerProps): JSX.Element => {
	return (
		<StudyInfoPresenter categoryCode={categoryCode} weekdays={weekdays} frequency={frequency} locations={locations} />
	);
};

export default StudyInfoContainer;
