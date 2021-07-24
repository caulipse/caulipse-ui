import React,{
    useState,
    useEffect,
} from 'react';
import EmptyComponent from '@src/app/profile/bookmark/emptyBookmark/EmptyComponent';
import * as Factory from "factory.ts";
import './Recruited.scss';
import { RecruitedStudyInterface } from '@src/app/profile/interface/interface'
import RecruitedList from './RecruitedList';


function Recruited() {

    const [recruitedStudies, setRecruitedStudies]=useState<RecruitedStudyInterface[]>([]);

    const getRecruitedStudies=(iter:number)=>{
        const recruitedStudyFactory=Factory.Sync.makeFactory<RecruitedStudyInterface>({
            studyId:Factory.each(i=>i),
            title:'스터티 카드',
            currentNumber:10,
            maxNumber:10,

            date:new Date(),
            name:'잠 많은 앙대생',
            tags:['태그1', '태그2', '태그3'],
        })

        return recruitedStudyFactory.buildList(iter);
    }

    useEffect(()=>{
        setRecruitedStudies(getRecruitedStudies(5));
    }, [])

    if(recruitedStudies.length===0){
        return(
            <EmptyComponent
                title='모집 완료'
                description='모집 완료된 스터디가 없습니다.'

                myBackgroundColor='#faf9fa'

            />
        )
    }

    return (
        <div>
            <RecruitedList recruitedStudies={recruitedStudies}/>
        </div>
    )
}

export default Recruited
