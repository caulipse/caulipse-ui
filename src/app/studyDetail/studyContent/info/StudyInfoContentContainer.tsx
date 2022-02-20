import React from 'react';
import { Study } from '@api/types';
import StudyInfoContentPresenter from './StudyInfoContentPresenter';

interface StudyInfoConntainerProps {
	study: Study;
}
const StudyInfoContentContainer = ({ study }: StudyInfoConntainerProps): JSX.Element => {
	return <StudyInfoContentPresenter study={study} />;
};

export default StudyInfoContentContainer;
