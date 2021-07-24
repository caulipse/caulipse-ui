import EmptyComponent from '@src/app/profile/bookmark/emptyBookmark/EmptyComponent'
import { RecruitingStudyInterface } from '@src/app/profile/interface/interface'
import React,{
    useState,
} from 'react';
import * as Factory from "factory.ts";
import { useEffect } from 'react';
import './Recruiting.scss';
import RecruitingList from './RecruitingList';

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

    if(recruitingStudies.length===0){
        return(
            <EmptyComponent 
                title='모집 중'
                description='이런! 모집 중인 스터디가 없네요 :('
                buttonText='스터디 등록하러 가기'
                buttonColor='#06529d'

                myBackgroundColor='#faf9fa'
            />
        )
    }

    return (
        <div>
            <RecruitingList recruitingStudies={recruitingStudies}/>
        </div>
    )
}

export default Recruiting
