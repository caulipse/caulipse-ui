import React from 'react';
import { Link } from 'react-router-dom';
import { Study } from '@api/types';
import StudyCardPresenter from './StudyCardPresenter';

interface ContainerProps {
	study: Study;
}
const StudyCardContainer = ({ study }: ContainerProps): JSX.Element => {
	return (
		<Link to={`/study/detail/${study.id}`}>
			<StudyCardPresenter study={study} />
		</Link>
	);
};

export default StudyCardContainer;
