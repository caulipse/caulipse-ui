import React from 'react';
import { StudyUser } from '@api/types';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@common/modal/enum';
import StudyUserItemPresenter from './StudyUserItemPresenter';

interface StudyUserItemContainerProps {
	studyUser: StudyUser;
	isHost: boolean;
	isAccepted?: boolean;
	capacity?: number | undefined;
	accepetedUserLength?: number | undefined;
}

const StudyUserItemContainer = ({
	studyUser,
	isHost,
	isAccepted = true,
	capacity,
	accepetedUserLength,
}: StudyUserItemContainerProps): JSX.Element => {
	const { openModal } = useModal();
	const onClick = () => {
		openModal(ModalKeyEnum.ApproveCancelModal, studyUser);
	};

	return (
		<>
			<StudyUserItemPresenter
				studyUser={studyUser}
				onClick={onClick}
				isHost={isHost}
				isAccepted={isAccepted}
				capacity={capacity}
				accepetedUserLength={accepetedUserLength}
			/>
		</>
	);
};

export default StudyUserItemContainer;
