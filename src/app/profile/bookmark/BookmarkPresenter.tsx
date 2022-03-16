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
			<div className="bookmarkStudiesTitle">북마크 ({recruitedBookmarks.length})</div>
			{recruitingBookmarks?.length !== 0 ? (
				<EmptyComponent
					title="이런, 북마크한 스터디가 없어요."
					buttonText="스터디 찾아보기"
					onClick={() => {
						console.log('스터디 찾아보기 클릭');
					}}
				/>
			) : (
				<BookmarkList bookmarkList={recruitingBookmarks} />
			)}
			<button
				type="button"
				className="recruitedAccordian"
				onClick={() => {
					setRecruitedStudiesVisible(!recruitedStudiesVisible);
				}}
			>
				{recruitedStudiesVisible || (
					<>
						<div>마감된 항목</div>
						<IoChevronUp className="bookmark-chevron-icon" />
					</>
				)}
			</button>
			{recruitedStudiesVisible && (
				<>
					<div className="recruitedStudiesTitle">마감된 스터디</div>
					<BookmarkList bookmarkList={recruitedBookmarks} isBlurred />
				</>
			)}
		</div>
	);
};

export default BookmarkPresenter;
