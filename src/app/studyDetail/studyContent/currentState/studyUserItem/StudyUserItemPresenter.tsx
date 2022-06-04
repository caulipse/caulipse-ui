import React from 'react';
import { StudyUser } from '@api/types';
import { IoEllipsisVertical } from 'react-icons/io5';
import './styles.scss';
import { Box, Button } from '@material-ui/core';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@src/components/common/modal/enum';
import ProfileImage from '@src/components/common/profileImage';
import usePatchStudyUserAccept from '@src/hooks/remotes/studyUser/usePatchStudyUserAccept';

interface StudyUserItemPresenterProps {
	studyUser: StudyUser;
	onClick: () => void;
	isHost: boolean;
	isAccepted: boolean;
	capacity?: number | undefined;
	accepetedUserLength?: number | undefined;
	studyId?: string | undefined;
}

// TODO: userName, profilePicture 서버에서 값 내려주면 확인하기
const StudyUserItemPresenter = ({
	studyUser,
	onClick,
	isHost,
	isAccepted,
	capacity,
	accepetedUserLength,
	studyId,
}: StudyUserItemPresenterProps): JSX.Element => {
	const { openModal } = useModal();
	const accpetUser = usePatchStudyUserAccept();

	const handleAccept = () => {
		accpetUser.mutate(
			{
				id: studyId!,
				data: {
					accept: true,
					userId: studyUser.userId,
				},
			},
			{
				onSuccess: () => {
					openModal(ModalKeyEnum.StudyApproveModal, {
						current: accepetedUserLength,
						total: capacity,
					});
				},
			}
		);
	};

	return (
		<div className="study-user-item-container">
			{isHost && isAccepted && (
				<button type="button" onClick={onClick}>
					<IoEllipsisVertical size={24} color="#b1b1b1" />
				</button>
			)}
			<div className="study-user-item-img-con">
				<ProfileImage userId={studyUser.userId} userImage={studyUser.image} width={40} height={40} />
				<div className="study-user-item-username">{studyUser.username}</div>
			</div>
			{/* TODO: 수락 대기중인 경우에 날짜 표시 */}
			{isAccepted ? (
				<div className="study-user-item-intro">{studyUser.tempBio}</div>
			) : (
				<Box>
					<Button className="study-user-item-accept-btn" variant="contained" onClick={handleAccept} disableElevation>
						신청 수락
					</Button>
				</Box>
			)}
		</div>
	);
};

export default StudyUserItemPresenter;
