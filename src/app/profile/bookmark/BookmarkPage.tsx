import React, { useEffect, useState } from 'react';
import * as Factory from "factory.ts";

// import EmptyBookmarkPage from './emptyBookmark/EmptyBookmarkPage';
import './BookmarkPage.scss';

import Study from './study/Study';
import Article from './article/Article';

function BookmarkPage() {

    return (
        <div className='container'>
            <Study />
            <Article />
        </div>
    )
}

export default BookmarkPage

