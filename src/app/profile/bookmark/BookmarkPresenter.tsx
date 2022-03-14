import React, { useState } from 'react';
import BookmarkList from '@src/app/profile/bookmark/bookmarkList';
import EmptyComponent from '@src/app/shared/components/emptyComponents';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import './index.scss';
import { Study } from '@src/api/types';

interface BookmarkPresenterInterface {
	recruitingBookmarks: Study[];
	recruitedBookmarks: Study[];
}

const BookmarkPresenter = ({ recruitingBookmarks, recruitedBookmarks }: BookmarkPresenterInterface): JSX.Element => {
	const [recruitedStudiesVisible, setRecruitedStudiesVisible] = useState<boolean>(false);

	return (
		<div className="bookmark-presenter-container">
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
				{recruitedStudiesVisible ? (
					<IoChevronDown size={24} color="#929699" />
				) : (
					<IoChevronUp size={24} color="#929699" />
				)}
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
