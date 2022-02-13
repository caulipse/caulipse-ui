import React from 'react';
import fetchStudies from '@src/hooks/remotes/study/useFetchStudies';
import StudyListPresenter from './StudyListPresenter';

interface IStudyListContainterProps {
	onClickSort: () => void;
}

const StudyListContainter = ({ onClickSort }: IStudyListContainterProps): JSX.Element => {
	const { data } = fetchStudies();
	console.info(data);
	return <StudyListPresenter onClickSort={onClickSort} />;
};

export default StudyListContainter;
