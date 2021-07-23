import EmptyComponent from '@src/app/profile/bookmark/emptyBookmark/EmptyComponent'
import { RecruitingStudyInterface } from '@src/app/profile/interface/interface'
import React,{
    useState,
} from 'react';
import * as Factory from "factory.ts";
import { useEffect } from 'react';
import './Recruiting.scss';

function Recruiting() {

    const [recruitingStudies, setRecruitingStudies]=useState<RecruitingStudyInterface[]>([]);

    const getRecruitingStudies=(iter:number)=>{
        const recruitingStudyFactory=Factory.Sync.makeFactory<RecruitingStudyInterface>({
            studyId:Factory.each(i=>i),
            title:'8월 토익 같이 준비하실 분, 900점 넘길 사람 모집합니다.',
            currentNumber:6,
            maxNumber:8,

            category:'자격증 > 어학',
            newInquiry:2,
            newApplicant:10,
        })
        return recruitingStudyFactory.buildList(iter);
    }

    useEffect(()=>{
        setRecruitingStudies(getRecruitingStudies(3));
    }, [])

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
                                <div className='recruitingStudyItemBody'>{item.title}</div>
                            </div>
                            <div className='columnContainer_flex1'>
                                <div className='recruitingStudyItemHeader'>모집된 인원</div>
                                <div className='recruitingStudyItemBody'>{item.currentNumber}/{item.maxNumber}명</div>
                            </div>
                            <div className='columnContainer_flex1'>
                                <div className='recruitingStudyItemHeader'>문의글 New!</div>
                                <div className='recruitingStudyItemBody'>{item.newInquiry}<div className='recruitingStudyItemHeader'> 개의 새로운 문의글</div></div>
                            </div>
                            <div className='columnContainer_flex1'>
                                <div className='recruitingStudyItemHeader'>문의글 New!</div>
                                <div className='recruitingStudyItemBody'>{item.newApplicant}<div className='recruitingStudyItemHeader'> 명의 새로운 신청자</div></div>
                            </div>
                            <div className='rowContainer'>
                                <button type='button'>수정하기</button>
                                <button type='button'>메뉴</button>
                            </div>
                        </div>
                    )
                })
            }
            
            {/* <EmptyComponent 
                title='모집 중'
                description='이런! 모집 중인 스터디가 없네요 :('
                buttonText='스터디 등록하러 가기'
                buttonColor='#06529d'

                myBackgroundColor='#faf9fa'
            /> */}
        </div>
    )
}

export default Recruiting
