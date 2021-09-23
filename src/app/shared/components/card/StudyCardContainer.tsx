import React, { useState } from 'react';
import { PostResponseDto } from './dummyList';
import StudyCardPresenter from './StudyCardPresenter';

interface ContainerProps {
  card: PostResponseDto
}
const StudyCardContainer = ({
  card
}: ContainerProps): JSX.Element => {
  return (
    <StudyCardPresenter card={card}/>
  );
};

export default StudyCardContainer;