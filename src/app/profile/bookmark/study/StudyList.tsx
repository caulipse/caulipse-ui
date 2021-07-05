import React from 'react'
import './BookmarkStudy.scss';
import { StudyInterface } from '../interface/interface';

type StudyListProps={
    studies:StudyInterface[],
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
                        <div style={{marginRight:index===4?0:'20px'}} className='studyItemContainer' key={item.id}>
                            <div className='studyItemName'>{item.name}</div>
                            <div className='studyItemTitle'>{item.title}</div>
                            <div className='studyItemInfoContainer'>
                                <div className='studyItemInfo'>{item.currentNumber}/{item.maxNumber}명</div>
                                <div className='studyItemInfo'>{item.date.getFullYear()}.{item.date.getMonth()}.{item.date.getDate()}</div>
                            </div>
                            <div className='tagContainer'>
                                {
                                    item.tags.map((tagItem, tagIndex)=>{
                                        return(
                                            <div key={`${tagItem}`} className='tagItemText'>
                                                {tagItem}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StudyList
