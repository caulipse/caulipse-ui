import React, { useEffect, useState } from 'react'
import './MyPage.scss';

import * as Factory from "factory.ts";

interface CategoryInterface{
    id:number;
    category:string;
}

function MyPage() {

    // 본캐 부캐 여부
    const [isMain, setIsMain]=useState(true);
    // 카테고리 목록
    const [categories, setCategories]=useState<CategoryInterface[]>([]);

    console.log('isMain, ', isMain);

    const getCategoriesData=(iter:number)=>{
        const categoryFactory=Factory.Sync.makeFactory<CategoryInterface>({
            id:Factory.each(i=>i),
            category:'카테고리',
        })
        return categoryFactory.buildList(iter);
    }

    useEffect(()=>{
        setCategories(getCategoriesData(20));
    }, [])

    const ProfileImage=()=>{
        return(
            <div className='profileImage'/>
        )
    }

    const TabBar=()=>{
        return(
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
        )
    }

    const NicknameInput=()=>{
        return(
            <div>
                <div style={{marginTop:'30px', marginBottom:'10px'}} className='rowContainer'>
                    <div className='titleText'>닉네임</div>
                    <div className='titleExplainText'>
                        {isMain?'게시판에서 사용하는 닉네임이에요!':'스터디를 구할 때 익명성을 보장해주는 닉네임이에요!'}
                    </div>
                </div>
                <div style={{
                    display:'flex',
                    width:'100%',
                }}>
                    <input className='nicknameInput' type='text' placeholder='닉네임을 입력해주세요.'/>
                </div> 
            </div>
        )
    }

    const MajorInput=()=>{
        return(
            <div>
                <div className={['nicknameText', 'majorContainer'].join(' ')}>학과</div>
                <div className='rowContainer'>
                    <div className='majorInputContainer'>
                        <input type="text" className='nicknameInput'/>
                    </div>
                    <div className='gradeSelectionContainer'>
                        <select name="grade" className='gradeSelection'>
                            <option value={1}>1학년</option>
                            <option value={2}>2학년</option>
                            <option value={3}>3학년</option>
                            <option value={4}>4학년</option>
                        </select>
                    </div>
                    
                </div>
            </div>
        )
    }

    const Introduction=({
        isShort,
    }:{
        isShort:boolean
    })=>{
        return(
            <div className='introductionContainer'>
                <div className='rowContainer'>
                    <div className='titleText'>
                        {isShort?'프로필 소개문구':`자기소개 글${isMain?'':' (부캐용)'}`}
                    </div>
                    {!isShort&&isMain&&<div className='titleExplainText'>프로필 문구가 너무 짧으신가요? 자기소개글을 완성시켜주세요!!</div>}
                </div>
                <textarea placeholder='나만의 소개글을 완성해주세요!' className='introductionTextArea' />
            </div>
        )
    }

    const Categories=()=>{
        return(
            <div className='categoryContainer'>
                <div className='titleText'>관심 카테고리</div>
                <div className='categoryListContainer'>
                    {
                        categories.map(item=>{
                            return(
                                <div key={item.id} className='categoryItemContainer'>
                                    <div className='categoryText'>{item.category}</div>
                                    <button className='categoryText' type='button'>x</button>
                                </div>
                            )
                        })
                    }
                    <button className='addItemContainer' type='button'>
                        <div className='addText'>추가하기</div>
                        <button className='addText' type='button'>+</button>
                    </button>
                </div>
            </div>
        )
    }

    const UpdateButton=()=>{
        return(
            <button type="button" className='updateButton'>
                <div className='updateButtonText'>수정하기</div>
            </button>
        )
    }

    return (
        <div className='container'>
            <div className='title'>프로필 설정</div>
            <div className='rowContainer'>
                <ProfileImage />
                <div className={['columnContainer', 'marginContainer'].join(' ')}>
                    <TabBar />
                    <NicknameInput />
                    <MajorInput />
                    
                </div>
            </div>
            {isMain&&<Introduction isShort/>}
            <Introduction isShort={false} />
            <Categories />
            <UpdateButton />
        </div>
    )
}

export default MyPage
