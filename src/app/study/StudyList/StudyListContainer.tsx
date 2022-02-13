import React from 'react';
import StudyListPresenter from './StudyListPresenter';

interface IStudyListContainterProps {
	onClickSort: () => void;
}

const StudyListContainter = ({ onClickSort }: IStudyListContainterProps): JSX.Element => {
	return <StudyListPresenter onClickSort={onClickSort} />;
};

export default StudyListContainter;
