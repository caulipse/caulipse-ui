import React, { useEffect, useState } from 'react';
import * as Factory from 'factory.ts';

// import EmptyBookmarkPage from './emptyBookmark/EmptyBookmarkPage';
import './BookmarkPage.scss';

import Study from './study/Study';
import Article from './article/Article';

const toFormattedCount = (count: number) => {
	if (count < 10) return `0${count}`;
	return count;
};

function BookmarkPage() {
	const [recruitingStudies, setRecruitingStudies] = useState<any[]>([]);

	const RecruitingStudies = () => {
		return (
			<div className="recruitingStudiesHeader">
				<button type="button">
					<span className="recruitingShowText">마감항목 표시</span>
				</button>
				<button type="button" className="deleteAllButtonBlurred">
					<span className="deleteAllTextBlurred">모두 삭제</span>
				</button>
			</div>
		);
	};

	const RecruitedStudies = () => {
		return <div>RecruitedStudies</div>;
	};

	return (
		<div className="container">
			<div className="bookmarkTitle">북마크</div>
			<div className="bookmarkCount">{toFormattedCount(recruitingStudies.length)}</div>
			<RecruitingStudies />
			<RecruitedStudies />
		</div>
	);
}

export default BookmarkPage;
