/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import StudyAskContainer from './ask/StudyAskContainer';
import StudyCurrentStateContainer from './currentState/StudyCurrentStateContainer';
import StudyInfoContentContainer from './info/StudyInfoContentContainer';
import './styles.scss';

interface StudyContentContainerProps {
	studyId: string;
	hostId: string;
	createdAt: string;
	views: number;
	bookmarkCount: number;
	title: string;
	studyAbout: string;
	capacity: number;
}

const StudyContentContainer = ({
	studyId,
	hostId,
	createdAt,
	views,
	bookmarkCount,
	title,
	studyAbout,
	capacity,
}: StudyContentContainerProps): JSX.Element => {
	const [index, setIndex] = useState<number>(1);

	const content = (i: number): JSX.Element => {
		if (i === 1)
			return (
				<StudyInfoContentContainer
					createdAt={createdAt}
					views={views}
					bookmarkCount={bookmarkCount}
					title={title}
					studyAbout={studyAbout}
				/>
			);
		if (i === 2) return <StudyCurrentStateContainer studyId={studyId} hostId={hostId} capacity={capacity} />;
		if (i === 3) return <StudyAskContainer studyId={studyId} hostId={hostId} />;

		return <div />;
	};

	return (
		<div className="studyContentContainer">
			<div className="studyContentButtons">
				<button className={index === 1 ? 'clicked' : 'infoButton'} type="button" onClick={() => setIndex(1)}>
					<span>스터디 정보</span>
				</button>
				<button className={index === 2 ? 'clicked' : 'currentStateButton'} type="button" onClick={() => setIndex(2)}>
					<span>참가 현황</span>
				</button>
				<button className={index === 3 ? 'clicked' : 'askButton'} type="button" onClick={() => setIndex(3)}>
					<span>문의글</span>
				</button>
			</div>

			{content(index)}
		</div>
	);
};

export default StudyContentContainer;
