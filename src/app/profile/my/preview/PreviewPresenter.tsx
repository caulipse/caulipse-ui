import React from 'react';
import './index.scss';

interface PreviewPresenterProps {
	bookmarkNum: number;
	applyNum: number;
	recruitNum: number;
}

const PreviewPresenter = ({ bookmarkNum, applyNum, recruitNum }: PreviewPresenterProps): JSX.Element => {
	return (
		<div className="preview-container">
			<div className="preview-item">
				<span className="preview-item-number">{bookmarkNum}</span>
				<span className="preview-item-title">북마크</span>
			</div>
			<div className="preview-item">
				<span className="preview-item-number">{applyNum}</span>
				<span className="preview-item-title">신청 중</span>
			</div>
			<div className="preview-item">
				<span className="preview-item-number">{recruitNum}</span>
				<span className="preview-item-title">모집 중</span>
			</div>
		</div>
	);
};

export default PreviewPresenter;
