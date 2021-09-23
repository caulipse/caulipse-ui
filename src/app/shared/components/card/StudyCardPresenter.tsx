import React from 'react';
import { PostResponseDto } from './dummyList';
import './styles.scss';

interface PresenterProps {
  card: PostResponseDto
}
const StudyCardPresenter = ({
  card
}: PresenterProps): JSX.Element => (
  <div className="studyCard-con">
    <div className="studyCard-wrap">
      <div className="studyCard-innerBox" style={{ backgroundColor: `${card.color}`}}>
        <div className="studyCard-category">
          djgkr xhdlr
        </div>
        <div className="studyCard-bookMarkButton"/>
        <div className="studyCard-title">{card.title}</div>
        <div className="studyCard-state">{card.vacancy}/{card.capacity}</div>
      </div>
      <div className="studyCard-main-info">
        <div className="studyCard-keywords">
          #ㄴㅁㅇㄹㅁㄴㅇㄹ
        </div>
        <div className="studyCard-about">
         {card.about}
        </div>
      </div>
      <div className="studyCard-sub-info"/>
    </div>
  </div>
);

export default StudyCardPresenter;