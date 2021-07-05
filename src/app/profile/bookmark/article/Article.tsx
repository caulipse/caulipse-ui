import React,{
    useState,
    useEffect,
} from 'react'
import * as Factory from "factory.ts";

import ArticleHeader from './ArticleHeader'
import ArticleList from './ArticleList'

import { ArticleInterface } from '../interface/interface';

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
            id:Factory.each(i=>i),
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

export default Article
