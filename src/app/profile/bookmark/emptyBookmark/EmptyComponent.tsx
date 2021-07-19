import React from 'react'
import { EmptyComponentInterface } from '../interface/interface'
import './EmptyBookmarkPage.scss';

function EmptyComponent({
    title,
    description,
    buttonText,
    buttonColor,
    onClick,
}:EmptyComponentInterface){
    return (
        <div>
            <div className='studyTitle'>{title}</div>
            <div className='emptyStudyContainer'>
                <div className='emptyText'>{description}</div>
                <button style={{backgroundColor:buttonColor}} className='emptyStudyButton' type="button" onClick={onClick}><div className='emptyButtonText'>{buttonText}</div></button>
            </div> 
        </div>
    )
}

export default EmptyComponent
