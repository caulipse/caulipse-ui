import React, { useState } from 'react';
import StudyCategoryBoxPresenter from './StudyCategoryBoxPresenter';

interface Props {
  name: string;
}
const StudyCategoryBoxContainer = ({name}: Props): JSX.Element => {
  const [state, setState] = useState<boolean>(false);
  const onClick = () => {
    setState(!state);
  }

  return (
    <StudyCategoryBoxPresenter name={name} state={state} onClick={onClick}/>
  );
}

export default StudyCategoryBoxContainer;