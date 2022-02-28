import React from 'react';

interface Props {
  name: string;
  state: boolean;
  onClick: () => void
}
const StudyCategoryBoxPresenter = ({name, state, onClick}: Props): JSX.Element => (
  <button type="button" onClick={onClick}>
    <span>{name}</span>
    {state && <span>스터디</span>}
  </button>
);

export default StudyCategoryBoxPresenter;