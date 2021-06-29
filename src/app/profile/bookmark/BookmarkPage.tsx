import React, { useEffect, useState } from 'react';
import * as Factory from "factory.ts";

import EmptyBookmarkPage from './emptyBookmark/EmptyBookmarkPage';
import './BookmarkPage.scss';

type Study={
    id:number;
    name:string;
    title:string;
    currentNumber:number;
    maxNumber:number;
    date:Date;
    tags:string[]
}

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
    const studyFactory=Factory.Sync.makeFactory<Study>({
        id:Factory.each(i=>i),
        name:'이름',
        title:'제목입니다.',
        currentNumber:10,
        maxNumber:10,
        date:new Date(),
        tags:['태그1', '태그2', '태그3'],
    })

    return studyFactory.buildList(iter);
}

function BookmarkPage() {

    const [studies, setStudies]=useState<Study[]>([]);

    useEffect(()=>{
        setStudies(getStudiesData(10))
    }, [])

    return (
        <div className='container'>
            <div>
                <StudyHeader />
                <StudyList studies={studies}/>
            </div>
            <div style={{
                marginTop:'93px'
            }}>
                <BoardHeader />
            </div>
        </div>
    )
}

const BoardHeader=()=>{
    return(
        <div className='studyContainer'>
            <div className='title'>게시글</div>
            <hr className='borderLine'/>
        </div>
    )
}

const StudyHeader=()=>{
    return(
        <div className='studyContainer'>
            <div className='title'>스터디</div>
            <hr className='borderLine'/>
            <button type="button" onClick={()=>console.log('click')}>
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                }}>
                    <div className='showAllText'>전체보기</div>
                </div>
            </button>
        </div>
    )
}

type StudyListProps={
    studies:Study[],
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

export default BookmarkPage

