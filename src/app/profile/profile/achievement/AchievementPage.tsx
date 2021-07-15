import React, { useEffect, useState } from 'react'

import './AchievementPage.scss';
import * as Factory from "factory.ts";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';

// Import Swiper styles
// import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'

interface AchievementInterface{
    id:number;
    achievementName:string;
}

SwiperCore.use([Navigation, Pagination]);

function AchievementPage() {

    const [achievements, setAchievements]=useState<AchievementInterface[]>([]);

    const getAchievements=(iter:number)=>{
        const achievementsFactory=Factory.Sync.makeFactory<AchievementInterface>({
            id:Factory.each(i=>i),
            achievementName:'업적'
        })
        return achievementsFactory.buildList(iter);
    }

    const AchievementBanner=()=>{
        return(
            <div className='bannerContainer'>
                <div>[업적 제목]</div>
                <div>다음 단계까지 1회 남았어요!</div>
                <div className='progressContainer'>
                    <progress id='process' max='100' value='90' />
                </div>
            </div>
        )
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
                {/* <Swiper
                    style={{
                        // backgroundColor:'red',
                        width:'100%',
                        height:'100%',
                    }}
                    // spaceBetween={500}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        clickable:true,
                        type:'bullets'
                    }}
                    centeredSlides
                    
                > */}
                <Swiper
                    className="mySwiper"
                    style={{
                        height:'100%',
                    }}
                    slidesOffsetBefore={24}
                    slidesOffsetAfter={24}
                    slidesPerView='auto'
                    // spaceBetween={8}
                    // initialSlide={1}
                    centeredSlides
                    // pagination={{
                    //     clickable:true,
                    //     el:'.swiper-bullet'
                    // }}
                    pagination={{
                        clickable:true,
                        renderBullet:(index, className)=>{
                            console.log('className and index, ', className, index);

                            return `<span class="${className}"></span>`;
                  
                          }
                    }}
                    // tag="ul"
                    
                    // navigation
                    // pagination={{
                    //     clickable: true,
                    // }}
                >
                    {
                        Array.from(Array(5).keys()).map(i=>{
                            return(
                                <SwiperSlide 
                                    key={i} 
                                    // tag="li"
                                    // style={{
                                    //     // backgroundColor:'blue',
                                    //     width:'100%', 
                                    //     height:'100%',
                                    // }}
                                >
                                    <AchievementBanner />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
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
