import React from 'react';
// import fetchStudies from '@src/hooks/remotes/study/useFetchStudies';
import StudyListPresenter from './StudyListPresenter';

interface IStudyListContainterProps {
	onClickSort: () => void;
	onClickFilter: () => void;
}

const StudyListContainter = ({ onClickSort, onClickFilter }: IStudyListContainterProps): JSX.Element => {
	// const { data } = fetchStudies();
	// console.info(data);
	return <StudyListPresenter onClickSort={onClickSort} onClickFilter={onClickFilter} />;
};

export default StudyListContainter;
