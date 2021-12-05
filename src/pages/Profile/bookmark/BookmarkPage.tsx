import React, { useEffect, useState } from 'react';
import * as Factory from 'factory.ts';

import './BookmarkPage.scss';
import EmptyComponent from '@src/app/shared/components/emptyComponents';

const toFormattedCount = (count: number) => {
	if (count < 10) return `0${count}`;
	return count;
};

const BookmarkPage = () => {
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

	const RecruitedStudies = () => {
		return <div>RecruitedStudies</div>;
	};

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
			<div className="bookmarkTitle">북마크</div>
			<div className="bookmarkCount">{toFormattedCount(recruitingStudies.length)}</div>
			<RecruitingStudies />
			<EmptyComponent
				title="이런, 북마크한 스터디가 없어요."
				buttonText="스터디 찾아보기"
				onClick={() => {
					console.log('스터디 찾아보기 클릭');
				}}
			/>
			{recruitingStudies.length === 0 || <RecruitedStudies />}
		</div>
	);
};

export default BookmarkPage;
