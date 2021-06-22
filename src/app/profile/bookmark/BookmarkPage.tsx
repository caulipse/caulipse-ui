import React from 'react';
import './BookmarkPage.scss';

function BookmarkPage() {
    return (
        <div>
            <div className='title'>스터디</div>
            <div className='emptyContainer'>
                <div className='emptyText'>이런, 아직 북마크된 스터디가 없네요</div>
                <button className='emptyStudyButton' type="button" onClick={()=>{console.log('클릭')}}>클릭해 보세요!</button>
            </div>
            <div className='title'>게시글</div>
            <div className='emptyContainer'>
                <div className='emptyText'>이런, 아직 북마크된 게시글이 없네요</div>
                <button className='emptyBoardButton' type="button" onClick={()=>{console.log('클릭')}}>클릭해 보세요!</button>
            </div>
        </div>
    )
}

export default BookmarkPage

