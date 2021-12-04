import React, { useEffect, useState } from 'react';
import * as Factory from 'factory.ts';

import './BookmarkPage.scss';
import BookmarkList from '@src/app/profile/bookmark/BookmarkList';
import { BookmarkInterface, StudyInterface } from '../../../app/profile/interface/interface';

const toFormattedCount = (count: number) => {
	if (count < 10) return `0${count}`;
	return count;
};

const BookmarkPage = () => {
	const [recruitingStudies, setRecruitingStudies] = useState<any[]>([]);

	const getBookmarkData = (iter: number) => {
		const bookmarkFactory = Factory.Sync.makeFactory<BookmarkInterface>({
			studyId: iter,
			title: '제목입니다.',
			currentNumber: 1,
			maxNumber: 10,
			date: new Date(),
			hits: 10,
			stars: 10,
			category: '어학->토익',
		});
		return bookmarkFactory.buildList(iter);
	};

	useEffect(() => {
		setRecruitingStudies(getBookmarkData(10));
	}, []);

	const EmptyRecruitingStudies = () => {
		return (
			<div className="emptyRecruitingStudiesContainer">
				<div className="emptyRecruitingStudiesText">이런, 아직 북마크 된 스터기가 없네요!</div>
				<button type="button" className="emptyRecruitingStudiesButton">
					<span className="emptyRecruitingStudiesButtonText">스터디 찾아보기</span>
				</button>
			</div>
		);
	};

	return (
		<div className="container">
			{/* <div className="bookmarkTitle">북마크</div>
			<div className="bookmarkCount">{toFormattedCount(recruitingStudies.length)}</div> */}
			<BookmarkList />
			<BookmarkList />
		</div>
	);
};

export default BookmarkPage;
