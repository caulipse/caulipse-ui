import React from 'react'

import './Recruited.scss';
import { RecruitedStudyInterface } from '@src/app/profile/interface/interface'

function RecruitedList({
    recruitedStudies
}:{
    recruitedStudies:RecruitedStudyInterface[],
}) {
    return (
        <div>
            모집 완료된 스터디 리스트가 표시됩니다. 
        </div>
    )
}

export default RecruitedList
