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
		return <div>RecruitingStudies</div>;
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
