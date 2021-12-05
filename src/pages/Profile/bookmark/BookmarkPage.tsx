import React, { useEffect, useState } from 'react';
import * as Factory from 'factory.ts';

import './BookmarkPage.scss';
import BookmarkList from '@src/app/profile/bookmark/BookmarkList';
import { BookmarkInterface, StudyInterface } from '../../../app/profile/interface/interface';

const BookmarkPage = () => {
	const [recruitingStudies, setRecruitingStudies] = useState<BookmarkInterface[]>([]);

	const getBookmarkData = (iter: number) => {
		const bookmarkFactory = Factory.Sync.makeFactory<BookmarkInterface>({
			studyId: Factory.each((i) => i),
			title: '제목입니다.',
			currentNumber: 1,
			maxNumber: 10,
			date: new Date(),
			hits: 5,
			stars: 5,
			category: Factory.each((i) => (i > 2 ? '어학->토익' : '프로그래밍')),
		});
		return bookmarkFactory.buildList(iter);
	};

	useEffect(() => {
		setRecruitingStudies(getBookmarkData(5));
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
			<BookmarkList title="북마크" bookmarkList={recruitingStudies} />
			<div className="recruitedStudiesTitle">마감된 스터디</div>
			<BookmarkList title="마감된 스터디" bookmarkList={recruitingStudies} isBlurred />
		</div>
	);
};

export default BookmarkPage;
