import React from 'react'
import { useEffect, useState } from 'react'
import './BookmarkArticle.scss';

import { ArticleInterface } from '../interface/interface';

// type Article={
//     id:number;
//     title:string;
//     author:string;
//     recommendation:number;
//     isBookmark:boolean;
// }

type ArticleListProps={
    articles:ArticleInterface[]
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
export default ArticleList
