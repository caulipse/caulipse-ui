import { routeCategory } from '@src/app/shared/interfaces/routePath';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import StudyCategoryBoxPresenter from './StudyCategoryBoxPresenter';

interface Props {
  item: routeCategory;
}
const StudyCategoryBoxContainer = ({item}: Props): JSX.Element => {
  const [state, setState] = useState<boolean>(false);
  const history = useHistory();

  const onClick = () => {
    history.push(`${item.route}`)
  }
  return (
    <StudyCategoryBoxPresenter name={item.name} state={state} onClick={onClick}/>
  );
}

export default StudyCategoryBoxContainer;