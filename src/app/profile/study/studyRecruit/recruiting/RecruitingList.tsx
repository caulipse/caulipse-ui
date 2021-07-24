import { RecruitingStudyInterface } from '@src/app/profile/interface/interface'
import React from 'react'

function RecruitingList({
    recruitingStudies
}:{
    recruitingStudies:RecruitingStudyInterface[],
}) {
    return (
        <div>
            <div className='headerText'>모집중</div>
            {
                recruitingStudies.map(item=>{
                    return(
                        <div 
                            key={item.studyId}
                            className='recruitingStudyItemContainer' 
                        >
                            <div className='columnContainer_flex2'>
                                <div className='recruitingStudyItemHeader'>{item.category}</div>
                                <span className='recruitingStudyItemBody'>{item.title}</span>
                            </div>
                            <div className='columnContainer_flex1'>
                                <div className='recruitingStudyItemHeader'>모집된 인원</div>
                                <span className='recruitingStudyItemBody'>{item.currentNumber}/{item.maxNumber}명</span>
                            </div>
                            <div className='columnContainer_flex1'>
                                <div className='recruitingStudyItemHeader'>문의글 <span className='newText'>New!</span></div>
                                <span className='recruitingStudyItemBody'>{item.newInquiry}<span className='recruitingStudyItemHeader'> 개의 새로운 문의글</span></span>
                            </div>
                            <div className='columnContainer_flex1'>
                                <div className='recruitingStudyItemHeader'>문의글 <span className='newText'>New!</span></div>
                                <span className='recruitingStudyItemBody'>{item.newApplicant}<span className='recruitingStudyItemHeader'> 명의 새로운 신청자</span></span>
                            </div>
                            <div className='rowContainer'>
                                <button type='button' className='buttonText'>
                                    수정하기
                                    {/* <div className='buttonText'>수정하기</div>   */}
                                </button>
                                <button type='button' className='buttonText'>
                                    메뉴
                                    {/* <div className='buttonText'>메뉴</div>   */}
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecruitingList
