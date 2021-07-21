import React from 'react'
import Recruited from './recruited/Recruited';
import Recruiting from './recruiting/Recruiting';

import './StudyRecruitPage.scss';

function StudyRecruitPage() {
    return (
        <div className='container'>
            <Header />
            <Recruiting />
            <Recruited />
        </div>
    )
}

const Header=()=>{
    return(
        <div className='header'>모집하는 스터디</div>
    )
}

export default StudyRecruitPage
