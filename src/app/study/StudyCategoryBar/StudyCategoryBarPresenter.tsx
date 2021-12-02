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
    route: "certification"
  },
  {
    name: "프로그래밍",
    route: "programming"
  },
  {
    name: "생활 / 기타",
    route: "etc"
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