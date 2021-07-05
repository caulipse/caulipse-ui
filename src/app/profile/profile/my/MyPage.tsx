import React, { useState } from 'react'
import './MyPage.scss';

function MyPage() {

    // 본캐 부캐 여부
    const [isMain, setIsMain]=useState(true);

    console.log('isMain, ', isMain);

    return (
        <div className='container'>
            <div className='title'>프로필 설정</div>
            <div className='rowContainer'>
                <div className='profileImage'/>
                <div className={['columnContainer', 'marginContainer'].join(' ')}>
                    <div className='rowContainer'>
                        <button 
                            type="button" 
                            className={isMain?'mainTabButton':'subTabButton'}
                            onClick={()=>setIsMain(true)}
                            
                        >
                            본캐
                        </button>
                        <button 
                            type="button" 
                            onClick={()=>setIsMain(false)}
                            className={!isMain?'mainTabButton':'subTabButton'}
                        >
                            부캐
                        </button>
                    </div>
                    <div style={{marginTop:'30px', marginBottom:'10px'}} className='rowContainer'>
                        <div className='nicknameText'>닉네임</div>
                        <div className='nicknameExplainText'>게시판에서 사용하는 닉네임이에요!</div>
                    </div>
                    <input className='nicknameInput' type='text' placeholder='닉네임을 입력해주세요.'/>
                    <div style={{marginTop:'40px', marginBottom:'10px'}} className='nicknameText'>학과</div>
                    <div className='rowContainer'>
                        <input type="text" className='nicknameInput'/>
                        <select name="grade">
                            <option value={1}>1학년</option>
                            <option value={2}>2학년</option>
                            <option value={3}>3학년</option>
                            <option value={4}>4학년</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPage
