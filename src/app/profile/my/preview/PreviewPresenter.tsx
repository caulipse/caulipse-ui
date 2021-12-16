import React from 'react';
import './index.scss';

interface PreviewPresenterProps {
	bookmarkNum: number;
	applyNum: number;
	recruitNum: number;
}

const PreviewPresenter = ({ bookmarkNum, applyNum, recruitNum }: PreviewPresenterProps) => {
	return <div className='container'>{bookmarkNum}</div>;
};

export default PreviewPresenter;
