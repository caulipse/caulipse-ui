import React from 'react';
import { StudyUser } from '@api/types';
import { IoEllipsisVertical } from 'react-icons/io5';
import './styles.scss';
import { Box, Button } from '@material-ui/core';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@src/components/common/modal/enum';
import ProfileImage from '@src/components/common/profileImage';
import usePatchStudyUserAccept from '@src/hooks/remotes/studyUser/usePatchStudyUserAccept';
import { useQueryClient } from 'react-query';
import QUERY_KEY from '@src/hooks/remotes';
import { format } from 'date-fns/esm';

interface StudyUserItemPresenterProps {
	studyUser: StudyUser;
	onClick: () => void;
	isHost: boolean;
	isAccepted: boolean;
	capacity?: number | undefined;
	accepetedUserLength?: number | undefined;
	studyId?: string | undefined;
}

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
	const client = useQueryClient();

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
						current: accepetedUserLength ?? 0 + 2, // 모집자 + 추가된 사람까지 포함해서 2명 더하기
						total: capacity,
					});
					client.refetchQueries(QUERY_KEY.FETCH_STUDY_USERS);
					client.refetchQueries(QUERY_KEY.FETCH_STUDY_PARTICIPANTS);
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
					<div className="study-user-item-intro">{format(new Date(studyUser?.createdAt ?? ''), 'yy-MM-dd')}</div>
					<Button className="study-user-item-accept-btn" variant="contained" onClick={handleAccept} disableElevation>
						신청 수락
					</Button>
				</Box>
			)}
		</div>
	);
};

export default StudyUserItemPresenter;
