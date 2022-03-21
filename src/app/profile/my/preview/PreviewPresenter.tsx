import { Box } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';

interface PreviewPresenterProps {
	bookmarkNum: number;
	applyNum: number;
	recruitNum: number;
}

const PreviewPresenter = ({ bookmarkNum, applyNum, recruitNum }: PreviewPresenterProps): JSX.Element => {
	const history = useHistory();

	const navigateToBookmark = () => {
		history.push('/profile/studies/bookmark');
	};

	const navigateToAppliedStudies = () => {
		history.push('/profile/studies/appliedStudies');
	};

	const navigateToRecruitingStudies = () => {
		history.push('/profile/studies/recruitingStudies');
	};

	return (
		<Box className="preview-container">
			{/* 이미지로 변경하기 */}
			<div className="preview-img" />
			<div className="preview-content-container">
				<button type="button" onClick={navigateToBookmark}>
					<div className="preview-item">
						<span className="preview-item-number">{bookmarkNum}</span>
						<span className="preview-item-title">북마크</span>
					</div>
				</button>
				<button type="button" onClick={navigateToAppliedStudies}>
					<div className="preview-item">
						<span className="preview-item-number">{applyNum}</span>
						<span className="preview-item-title">신청 중</span>
					</div>
				</button>
				<button type="button" onClick={navigateToRecruitingStudies}>
					<div className="preview-item">
						<span className="preview-item-number">{recruitNum}</span>
						<span className="preview-item-title">모집 중</span>
					</div>
				</button>
			</div>
		</Box>
	);
};

export default PreviewPresenter;
