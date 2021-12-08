import React, { useEffect, useState } from 'react';
import * as Factory from 'factory.ts';
import './BookmarkPage.scss';
import BookmarkList from '@src/app/profile/bookmark/BookmarkList';
import { BookmarkInterface, StudyInterface } from '../../../app/profile/interface/interface';

const BookmarkPage = (): JSX.Element => {
	const [recruitingStudies, setRecruitingStudies] = useState<any[]>([]);

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
				{recruitingStudies.length === 0 && recruitingShow && <EmptyRecruitingStudies />}
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
