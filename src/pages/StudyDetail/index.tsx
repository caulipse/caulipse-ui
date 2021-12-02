import React from 'react';
import { useParams } from 'react-router-dom';

const StudyDetailPage = (): JSX.Element => {
  const { studyId } = useParams<any>();
  return (
    <div>
      study detail page {studyId}
    </div>
  )
}

export default StudyDetailPage;