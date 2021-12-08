import React, { useEffect, useState } from 'react';
import * as Factory from 'factory.ts';
import './BookmarkPage.scss';
import BookmarkList from '@src/app/profile/bookmark/BookmarkList';
import { BookmarkInterface, StudyInterface } from '../../../app/profile/interface/interface';

const BookmarkPage = () => {
	const [recruitingStudies, setRecruitingStudies] = useState<BookmarkInterface[]>([]);
	const [recruitedStudiesVisible, setRecruitedStudiesVisible] = useState<boolean>(false);

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

	return (
		<div className="container">
			<BookmarkList title="북마크" bookmarkList={recruitingStudies} />
			<button
				type="button"
				className="recruitedAccordian"
				onClick={() => {
					setRecruitedStudiesVisible(!recruitedStudiesVisible);
				}}
			>
				<div>마감된 항목</div>
				<div>^</div>
			</button>
			{recruitedStudiesVisible && (
				<>
					<div className="recruitedStudiesTitle">마감된 스터디</div>
					<BookmarkList title="마감된 스터디" bookmarkList={recruitingStudies} isBlurred />
				</>
			)}
		</div>
	);
};

export default BookmarkPage;
