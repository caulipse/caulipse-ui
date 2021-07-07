import React,{
    useState,
    useEffect,
} from 'react'
import * as Factory from "factory.ts";
import './BookmarkStudy.scss';

import StudyHeader from './StudyHeader';
import StudyList from './StudyList';

import { StudyInterface } from '../interface/interface';

// type Study={
//     id:number;
//     name:string;
//     title:string;
//     currentNumber:number;
//     maxNumber:number;
//     date:Date;
//     tags:string[]
// }

function Study() {


    const [studies, setStudies]=useState<StudyInterface[]>([]);
    
    const getStudiesData=(iter:number)=>{
        // const result=[];
        // for(let i=0;i<iter;i+=1){
        //     const tagArr=[];
        //     for(let j=0;j<5;j+=1){
        //         tagArr.push(faker.lorem.word())
        //     }
        //     result.push({
        //         id:i,
        //         name:faker.name.findName(),
        //         title:faker.lorem.sentence(),
        //         currentNumber:faker.random.number(),
        //         maxNumber:10,
        //         data:faker.date.recent(30),
        //         tags:tagArr,
        //     })
        // }
        // return result;
        const studyFactory=Factory.Sync.makeFactory<StudyInterface>({
            studyId:Factory.each(i=>i),
            name:'이름',
            title:'제목입니다.',
            currentNumber:10,
            maxNumber:10,
            date:new Date(),
            tags:['태그1', '태그2', '태그3'],
        })
    
        return studyFactory.buildList(iter);
    }

    useEffect(()=>{
        setStudies(getStudiesData(10))
    }, [])

    return (
        <div>
            <StudyHeader />
            <StudyList studies={studies}/>
        </div>
    )
}

export default Study
