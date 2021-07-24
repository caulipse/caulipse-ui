import React from 'react'
import './BookmarkStudy.scss';
import { RecruitedStudyInterface } from '../../interface/interface';
import StudyItem from './StudyItem';

type StudyListProps={
    studies:RecruitedStudyInterface[],
}

const StudyList=({
    studies,
}:StudyListProps)=>{
    console.log('studies in StudyList, ', studies)
    return(
        // <div>스터디리스트</div>
        <div className='studyList'>
            {
                studies.slice(0, 5).map((item, index)=>{
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
    )
}

export default StudyList
