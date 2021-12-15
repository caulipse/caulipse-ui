import React, { useState } from 'react';
import BookmarkList from '@src/app/profile/bookmark/BookmarkList';
import EmptyComponent from '@src/app/shared/components/emptyComponents';
import './index.scss';
import { BookmarkInterface } from '../interface/interface';

interface BookmarkPresenterInterface {
	recruitingBookmarks: BookmarkInterface[];
	recruitedBookmarks: BookmarkInterface[];
}

const BookmarkPresenter = ({ recruitingBookmarks, recruitedBookmarks }: BookmarkPresenterInterface): JSX.Element => {
	const [recruitedStudiesVisible, setRecruitedStudiesVisible] = useState<boolean>(false);

	return (
		<div className="container">
			{recruitingBookmarks?.length === 0 ? (
				<EmptyComponent
					title="이런, 북마크한 스터디가 없어요."
					buttonText="스터디 찾아보기"
					onClick={() => {
						console.log('스터디 찾아보기 클릭');
					}}
				/>
			) : (
				<BookmarkList title="북마크" bookmarkList={recruitingBookmarks} />
			)}
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
					<BookmarkList title="마감된 스터디" bookmarkList={recruitedBookmarks} isBlurred />
				</>
			)}
		</div>
	);
};

export default BookmarkPresenter;
