import React from 'react';
import fetchStudies from '@src/hooks/remotes/study/useFetchStudies';
import StudyListPresenter from './StudyListPresenter';

interface IStudyListContainterProps {
	onClickSort: () => void;
}

const StudyListContainter = ({ onClickSort }: IStudyListContainterProps): JSX.Element => {
	const { data } = fetchStudies();
	return <StudyListPresenter onClickSort={onClickSort} data={data?.perPage_studies} />;
};

export default StudyListContainter;
