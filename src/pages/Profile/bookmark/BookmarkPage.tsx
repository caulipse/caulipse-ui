import React, { useEffect, useState } from 'react';
import * as Factory from 'factory.ts';
import BookmarkList from '@src/app/profile/bookmark/BookmarkList';
import EmptyComponent from '@src/app/shared/components/emptyComponents';
import './BookmarkPage.scss';
import { BookmarkInterface, StudyInterface } from '../../../app/profile/interface/interface';

const BookmarkPage = (): JSX.Element => {
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

	const RecruitingStudies = () => {
		const [recruitingShow, setRecruitingShow] = useState<boolean>(true);

		const toggleShow = () => {
			setRecruitingShow(!recruitingShow);
		};

		const deleteAll = () => {
			console.log('deleteAll called');
		};

		return (
			<>
				<div className="recruitingStudiesHeader">
					<button type="button" onClick={toggleShow}>
						<span className="recruitingShowText">마감항목 표시</span>
					</button>
					<button
						type="button"
						className="deleteAllButtonBlurred"
						onClick={deleteAll}
						disabled={recruitingStudies.length === 0}
					>
						<span className="deleteAllTextBlurred">모두 삭제</span>
					</button>
				</div>
				{recruitingStudies.length === 0 && recruitingShow && (
					<EmptyComponent
						title="이런, 북마크한 스터디가 없어요."
						buttonText="스터디 찾아보기"
						onClick={() => {
							console.log('스터디 찾아보기 클릭');
						}}
					/>
				)}
			</>
		);
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
