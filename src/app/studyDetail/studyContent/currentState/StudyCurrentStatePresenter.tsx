import React from 'react';
import { StudyUser, UserProfile } from '@api/types';
import StudyUserHostItemContainer from './studyUserHostItem/StudyUserHostItemContainer';
import StudyUserItemContainer from './studyUserItem/StudyUserItemContainer';
import './styles.scss';

interface StudyCurrentStatePresenterProps {
	studyUsers: StudyUser[];
	waitingStudyUsers?: StudyUser[];
	host: UserProfile;
	capacity: number;
	isHost: boolean;
}

const StudyCurrentStatePresenter = ({
	studyUsers,
	host,
	capacity,
	isHost,
	waitingStudyUsers,
}: StudyCurrentStatePresenterProps): JSX.Element => {
	return (
		<div className="studyCurrentStateContainer">
			<div className="mh20">
				{isHost && (
					<div className="mb3rem">
						<div className="studyCurrentUserContainer">
							<div className="studyCurrentStateTitle">수락 대기중</div>
							<div className="studyCurrentState">({waitingStudyUsers?.length ? waitingStudyUsers?.length + 1 : 0})</div>
						</div>
						<div className="studyUserListContainer">
							{waitingStudyUsers?.map((studyUser: StudyUser, studyUserIndex: number) => {
								return (
									<div key={studyUser.userId} className={studyUserIndex === 0 ? '' : 'ml8'}>
										<StudyUserItemContainer
											studyUser={studyUser}
											isHost={isHost}
											isAccepted={false}
											capacity={capacity}
											accepetedUserLength={studyUsers.length + 1}
										/>
									</div>
								);
							})}
						</div>
					</div>
				)}
				<div className="studyCurrentUserContainer">
					<div className="studyCurrentStateTitle">참여인원</div>
					<div className="studyCurrentState">
						({studyUsers.length + 1}/{capacity})
					</div>
				</div>
				<div className="studyHost">
					<StudyUserHostItemContainer user={host} />
				</div>
				<div className="studyUserListContainer">
					{studyUsers.map((studyUser: StudyUser, studyUserIndex: number) => {
						return (
							<div key={studyUser.userId} className={studyUserIndex === 0 ? '' : 'ml8'}>
								<StudyUserItemContainer studyUser={studyUser} isHost={isHost} />
							</div>
						);
					})}
				</div>
				<div className="mb8rem" />
			</div>
		</div>
	);
};

export default StudyCurrentStatePresenter;
