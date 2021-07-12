import React, { useEffect, useState } from 'react'

import './AchievementPage.scss';
import * as Factory from "factory.ts";

interface AchievementInterface{
    id:number;
    achievementName:string;
}

function AchievementPage() {

    const [achievements, setAchievements]=useState<AchievementInterface[]>([]);

    const getAchievements=(iter:number)=>{
        const achievementsFactory=Factory.Sync.makeFactory<AchievementInterface>({
            id:Factory.each(i=>i),
            achievementName:'업적'
        })
        return achievementsFactory.buildList(iter);
    }

    useEffect(()=>{
        setAchievements(getAchievements(30));
    }, [])

    return (
        <div className='container'>
            <div className='headerText'>업적</div>
            <div style={{marginTop:'21px'}} className='contentContainer'>
                이미지/GIF
            </div>
            <div style={{marginTop:'10px'}} className='contentContainer'>
                <div>[업적 제목]</div>
                <div>다음 단계까지 1회 남았어요!</div>
                <div className='progressContainer'>
                    <progress id='process' max='100' value='90' />
                </div>
            </div>
            <div className='achievementsContainer'>
                {
                    achievements.map(item=>{
                        return(
                            <div key={item.id} className='achievementItemContainer'>
                                <div className='achievementItemCircle' />
                                <div className='achievementItemText'>{item.achievementName}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AchievementPage
