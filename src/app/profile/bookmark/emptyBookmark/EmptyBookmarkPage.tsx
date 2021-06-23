import React from 'react';
import './EmptyBookmarkPage.scss';

function EmptyBookmarkPage() {
    return (
        <div className='container'>
            <div className='studyTitle'>스터디</div>
            <div className='emptyStudyContainer'>
                <div className='emptyText'>이런, 아직 북마크된 스터디가 없네요</div>
                <button className='emptyStudyButton' type="button" onClick={()=>{console.log('클릭')}}><div className='emptyButtonText'>클릭해 보세요!</div></button>
            </div> 
            <div className='boardTitle'>게시글</div>
            <div className='emptyBoardContainer'>
                <div className='emptyText'>이런, 아직 북마크된 게시글이 없네요</div>
                <button className='emptyBoardButton' type="button" onClick={()=>{console.log('클릭')}}><div className='emptyButtonText'>클릭해 보세요!</div></button>
            </div>
            
        </div>
    )
}

export default EmptyBookmarkPage

