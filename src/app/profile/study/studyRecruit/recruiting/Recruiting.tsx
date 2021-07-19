import EmptyComponent from '@src/app/profile/bookmark/emptyBookmark/EmptyComponent'
import React from 'react'

function Recruiting() {
    return (
        <div>
            <EmptyComponent 
                title='모집 중'
                description='이런! 모집 중인 스터디가 없네요 :('
                buttonText='스터디 등록하러 가기'
                buttonColor='#06529d'

                myBackgroundColor='#faf9fa'
            />
        </div>
    )
}

export default Recruiting
