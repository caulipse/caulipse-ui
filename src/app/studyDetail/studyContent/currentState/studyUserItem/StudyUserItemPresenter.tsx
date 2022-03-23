import React from 'react';
import { StudyUser } from '@api/types';
import { IoEllipsisVertical } from 'react-icons/io5';
import './styles.scss';
import { Box, Button } from '@material-ui/core';

interface StudyUserItemPresenterProps {
	studyUser: StudyUser;
	onClick: () => void;
	isHost: boolean;
	isAccepted: boolean;
}

// TODO: userName, profilePicture 서버에서 값 내려주면 확인하기
const StudyUserItemPresenter = ({
	studyUser,
	onClick,
	isHost,
	isAccepted,
}: StudyUserItemPresenterProps): JSX.Element => {
	const handleAccept = () => {
		// TODO: 신청 수락
	};

	return (
		<div className="study-user-item-container">
			{isHost && isAccepted && (
				<button type="button" onClick={onClick}>
					<IoEllipsisVertical size={24} color="#b1b1b1" />
				</button>
			)}
			<img className="study-user-item-img" src={studyUser.profilePicture} alt="" width={40} height={40} />
			<div className="study-user-item-username">{studyUser.userName}</div>
			{isAccepted ? (
				<div className="study-user-item-intro">{studyUser.tempBio}</div>
			) : (
				<Box>
					<Button className="study-user-item-accept-btn" variant="contained" onClick={handleAccept}>
						신청 수락
					</Button>
				</Box>
			)}
		</div>
	);
};

export default StudyUserItemPresenter;
