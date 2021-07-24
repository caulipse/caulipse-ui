import React from 'react';
import { RecruitedStudyInterface } from '@src/app/profile/interface/interface';
import './BookmarkStudy.scss';

interface StudyItemInterface{
    item:RecruitedStudyInterface,
    index:number,
}

function StudyItem({
    item,
    index,
}:StudyItemInterface) {
    return (
        <div style={{marginRight:index===4?0:'20px'}} className='studyItemContainer'>
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
}

export default StudyItem
