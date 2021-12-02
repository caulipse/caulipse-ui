import React from 'react';
import { Link } from 'react-router-dom';
import { PostResponseDto } from './dummyList';
import StudyCardPresenter from './StudyCardPresenter';

interface ContainerProps {
  card: PostResponseDto
}
const StudyCardContainer = ({
  card
}: ContainerProps): JSX.Element => {

  return (
    <Link to={`/study/detail/${card.id}`}><StudyCardPresenter card={card}/></Link>
  );
};

export default StudyCardContainer;