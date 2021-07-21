import React from 'react'
import Recruited from './recruited/Recruited';
import Recruiting from './recruiting/Recruiting';

import './StudyRecruitPage.scss';

function StudyRecruitPage() {
    return (
        <div className='container'>
            <Recruiting />
            <Recruited />
        </div>
    )
}

export default StudyRecruitPage
