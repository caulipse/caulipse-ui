import React from 'react'
import { EmptyComponentInterface } from '../../interface/interface'
import './EmptyBookmarkPage.scss';

function EmptyComponent({
    title,
    description,
    buttonText,
    buttonColor,
    onClick,

    myBackgroundColor,
}:EmptyComponentInterface){
    return (
        <div>
            <div className='studyTitle'>{title}</div>
            <div style={{backgroundColor:myBackgroundColor}} className='emptyStudyContainer'>
                <div className='emptyText'>{description}</div>
                {buttonText&&<button style={{backgroundColor:buttonColor}} className='emptyStudyButton' type="button" onClick={onClick}><div className='emptyButtonText'>{buttonText}</div></button>}
            </div> 
        </div>
    )
}

export default EmptyComponent
