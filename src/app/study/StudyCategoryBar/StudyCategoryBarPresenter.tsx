import React from 'react';
import StudyCategoryBoxContainer from './studyCategoryBox/StudyCategoryBoxContainer';
import './styles.scss';

const data: any[] = [
  {
    name: "취업 / 면접",
  },
  {
    name: "자격증",
  },
  {
    name: "프로그래밍",
  },
  {
    name: "생활 / 기타",
  },
]

const StudyCategoryBarPresenter = (): JSX.Element => (
  <div className="studyCategroy-b-con">
    <div className="studyCategroy-b-wrap">
      {
        data.map((item) => (
          <StudyCategoryBoxContainer name={item.name} key={item.name}/>
        ))
      }
    </div>
  </div>
);

export default StudyCategoryBarPresenter;