import React,{
    useState,
    useEffect,
} from 'react'
import * as Factory from "factory.ts";

import ArticleHeader from './ArticleHeader'
import ArticleList from './ArticleList'

import { ArticleInterface } from '../interface/interface';
import EmptyComponent from '../emptyBookmark/EmptyComponent';

import './BookmarkArticle.scss';

// type Article={
//     id:number;
//     title:string;
//     author:string;
//     recommendation:number;
//     isBookmark:boolean;
// }

function Article() {
    
    const [articles, setArticles]=useState<ArticleInterface[]>([]);

    const [startPage, setStartPage]=useState(1);

    const getArticles=(iter:number)=>{
        const studyFactory=Factory.Sync.makeFactory<ArticleInterface>({
            articleId:Factory.each(i=>i),
            title:'제목입니다.',
            author:'작성자',
            recommendation:11,
            isBookmark:true,
        })
        return studyFactory.buildList(iter)
    }

    useEffect(()=>{
        setArticles(getArticles(10))
    }, [])

    if(articles.length===0){
        return(
            <EmptyComponent 
                title='게시글'
                description='이런, 아직 북마크된 게시물이 없네요!'
                buttonText='게시판 바로가기'
                buttonColor='#233dff'
                // onClick={()=>{console.log('버튼 클릭')}}
            />
        )
    }

    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
        }}>
            <div style={{
                marginTop:'93px',
                marginBottom:'50px'
            }}>
                <ArticleHeader />
                <ArticleList articles={articles} />
            </div>
            <Pagination startPage={startPage} />
        </div>
    )
}

const Pagination=({
    startPage
}:{
    startPage:number,
})=>{
    return(
        <div className='paginationContainer'>
            <button type="button" className='paginationText'>이전</button>
            {
                Array.from(Array(5).keys()).map(i=><button key={i} type="button" className='paginationNumber'>{startPage+i}</button>)
            }
            <button type="button" className='paginationText'>다음</button>
        </div>
    )
}

export default Article
