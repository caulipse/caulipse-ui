import InputBase from '@src/app/shared/components/input/InputBaseContainer';
import React from 'react';
import './styles.scss';

interface StudyAskPresenterProps {
  content: string,
  setContent: (content: string) => void
}
const StudyAskPresenter = ({
  content, 
  setContent
}: StudyAskPresenterProps): JSX.Element => (
  <div className="studyAskContainer">
    <div className="studyAskInputContainer">
      <InputBase
        placeholder='궁금한 점들을 물어보세요!'
        content={content}
        setContent={setContent}
      />
    </div>
    <div className="StudyCommentsListContainer">
      <div className="StudyCommentsListInfo">
        <div className="StudyCommentListTitle">문의글</div>
        <div className="StudyCommentListCount">(6)</div>
      </div>
      <div>
        <div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
  </div>
)

export default StudyAskPresenter;