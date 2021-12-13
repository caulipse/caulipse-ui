import React, { useState } from 'react';
import StudyAskPresenter from './StudyAskPresenter';

const StudyAskContainer = (): JSX.Element => {
  const [content, setContent] = useState<string>('');

  return (
    <StudyAskPresenter content={content} setContent={setContent}/>
  );
}

export default StudyAskContainer;