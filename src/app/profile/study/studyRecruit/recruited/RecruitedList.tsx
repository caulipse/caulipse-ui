import React from 'react'

import './Recruited.scss';
import { RecruitedStudyInterface } from '@src/app/profile/interface/interface'
import StudyItem from '@src/app/profile/bookmark/study/StudyItem';

function RecruitedList({
    recruitedStudies
}:{
    recruitedStudies:RecruitedStudyInterface[],
}) {
    return (
        <div>
            <div className='headerText'>모집완료</div>
            <div className='studyListContainer'>
                {
                    recruitedStudies.slice(0, 5).map((item, index)=>{
                        return(
                            <StudyItem 
                                key={item.studyId}
                                item={item}
                                index={index}
                            />
                        )
                    })
                }
            </div>

            
        </div>
    )
}

export default RecruitedList
