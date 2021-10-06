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
      <div className="studyCard-categoryAndcapacity-title">
        <span>category</span>
        <span>모집 인원</span>
      </div>
      <div className="studyCard-titleAndCapacity-value">
        <span>{card.title}</span>
        <div>{card.vacancy}/{card.capacity}</div>
      </div>
      <div className="studyCard-progressbar-con">
       <progress max={card.capacity} value={card.vacancy} className="studyCard-progresbar"/>
      </div>
      <div className="studyCard-subInfo-con">
        <div>sub info</div>
        <div>
          dfdfd
        </div>
      </div>
    </div>
  </div>
);

export default StudyCardPresenter;