import React from 'react';
import StudyInfoPresenter from './StudyInfoPresenter';

interface StudyInfoContainerProps {
	categoryCode: string;
	weekday: string;
	frequency: string;
	location: string;
	isHost: boolean;
}
const StudyInfoContainer = ({
	categoryCode,
	weekday,
	frequency,
	location,
	isHost,
}: StudyInfoContainerProps): JSX.Element => {
	return (
		<StudyInfoPresenter
			categoryCode={categoryCode}
			weekday={weekday}
			frequency={frequency}
			location={location}
			isHost={isHost}
		/>
	);
};

export default StudyInfoContainer;
