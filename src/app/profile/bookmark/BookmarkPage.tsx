import React, { useEffect, useState } from 'react';
import * as Factory from "factory.ts";

import EmptyBookmarkPage from './emptyBookmark/EmptyBookmarkPage';
import './BookmarkPage.scss';

import StudyHeader from './study/StudyHeader';
import Study from './study/Study';

type Article={
    id:number;
    title:string;
    author:string;
    recommendation:number;
    isBookmark:boolean;
}

const getArticles=(iter:number)=>{
    const studyFactory=Factory.Sync.makeFactory<Article>({
        id:Factory.each(i=>i),
        title:'제목입니다.',
        author:'작성자',
        recommendation:11,
        isBookmark:true,
    })
    return studyFactory.buildList(iter)
}

function BookmarkPage() {

    const [articles, setArticles]=useState<Article[]>([]);

    const [startPage, setStartPage]=useState(1);

    useEffect(()=>{
        setArticles(getArticles(10))
    }, [])

    return (
        <div className='container'>
            <Study />
            <div style={{
                marginTop:'93px',
                marginBottom:'50px'
            }}>
                <ArticleHeader />
                <ArticleList articles={articles} />
            </div>
            <div className='paginationContainer'>
                <button type="button" className='paginationText'>이전</button>
                {
                    Array.from(Array(5).keys()).map(i=><button key={i} type="button" className='paginationNumber
                    '>{startPage+i}</button>)
                }
                <button type="button" className='paginationText'>다음</button>
            </div>
        </div>
    )
}

const ArticleHeader=()=>{
    return(
        <div className='studyContainer'>
            <div className='title'>게시글</div>
            <hr className='borderLine'/>
        </div>
    )
}

type ArticleListProps={
    articles:Article[]
}

const ArticleList=({
    articles,
}:ArticleListProps)=>{

    const HeaderBar=()=>{
        return(
            <div className='articleHeaderContainer'>
                <div className={['articleText', 'articleTitle'].join(' ')}><div style={{marginLeft:'140px'}}>제목</div></div>
                <div className='articleInfoContainer'>
                    <div className={['articleText', 'articleInfo'].join(' ')}>작성자</div>
                    <div className={['articleText', 'articleInfo'].join(' ')}>추천수</div>
                    <div className={['articleText', 'articleInfo'].join(' ')}>북마크</div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <HeaderBar />
            {
                articles.slice(0, 6).map(item=>{
                    return(
                        <div key={item.id} className='articleContainer'>
                            <div className={['articleText', 'articleTitle'].join(' ')}><div style={{marginLeft:'30px'}}>{item.title}</div></div>
                            <div className='articleInfoContainer'>
                                <div className={['articleText', 'articleInfo'].join(' ')}>{item.author}</div>
                                <div className={['articleText', 'articleInfo'].join(' ')}>{item.recommendation}</div>
                                <div className={['articleText', 'articleInfo'].join(' ')}>북마크</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}





export default BookmarkPage

