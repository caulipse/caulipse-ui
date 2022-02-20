import React from 'react';
import { Study } from '@api/types';
import StudyInfoPresenter from './StudyInfoPresenter';

interface StudyInfoContainerProps {
	study: Study;
}
const StudyInfoContainer = ({ study }: StudyInfoContainerProps): JSX.Element => {
	return <StudyInfoPresenter study={study} />;
};

export default StudyInfoContainer;
