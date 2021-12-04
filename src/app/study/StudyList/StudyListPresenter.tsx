import { Lists, PostResponseDto } from '@src/app/shared/components/card/dummyList';
import StudyCardContainer from '@src/app/shared/components/card/StudyCardContainer';
import React from 'react';
import './styles.scss';

const StudyListPresenter = ():JSX.Element => (
  <div className="studyList-con">
    <div className="studyList-wrap">
      <div className="studyList-dropdown">
        sort drop down
      </div>

      <div className="studyList-listAndBoards-con">
        <div className="studyList">
          {
            Lists.map((card: PostResponseDto) => (
              <StudyCardContainer card={card} key={card.id}/>
            ))
          }
        </div>
      </div>
    </div>
  </div>
);

export default StudyListPresenter;