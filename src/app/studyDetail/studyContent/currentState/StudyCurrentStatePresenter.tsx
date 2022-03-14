import React from 'react';
import { StudyUser, UserProfile } from '@api/types';
import StudyUserHostItemContainer from './studyUserHostItem/StudyUserHostItemContainer';
import StudyUserItemContainer from './studyUserItem/StudyUserItemContainer';
import './styles.scss';

interface StudyCurrentStatePresenterProps {
	studyUsers: StudyUser[];
	host: UserProfile;
	capacity: number;
}

const StudyCurrentStatePresenter = ({ studyUsers, host, capacity }: StudyCurrentStatePresenterProps): JSX.Element => (
	<div className="studyCurrentStateContainer">
		<div className="mh20">
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
							<StudyUserItemContainer studyUser={studyUser} />
						</div>
					);
				})}
			</div>
		</div>
	</div>
);

export default StudyCurrentStatePresenter;
