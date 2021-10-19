import { routeCategory } from '@src/app/shared/interfaces/routePath';
import React from 'react';
import StudyCategoryBoxContainer from './studyCategoryBox/StudyCategoryBoxContainer';
import './styles.scss';

const data: routeCategory[] = [
  {
    name: "취업 / 면접",
    route: "employment"
  },
  {
    name: "자격증",
    route: "a"
  },
  {
    name: "프로그래밍",
    route: "s"
  },
  {
    name: "생활 / 기타",
    route: "c"
  },
]

const StudyCategoryBarPresenter = (): JSX.Element => (
  <div className="studyCategroy-b-con">
    <div className="studyCategroy-b-wrap">
      {
        data.map((item) => (
          <StudyCategoryBoxContainer item={item} key={item.name}/>
        ))
      }
    </div>
  </div>
);

export default StudyCategoryBarPresenter;