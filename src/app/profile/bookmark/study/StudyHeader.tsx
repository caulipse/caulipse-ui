import React from 'react';
import './BookmarkStudy.scss';

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

export default StudyHeader
