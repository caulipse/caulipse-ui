import React from 'react';
import { StudyUser } from '@api/types';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@common/modal/enum';
import StudyUserItemPresenter from './StudyUserItemPresenter';

interface StudyUserItemContainerProps {
	studyUser: StudyUser;
	isHost: boolean;
	isAccepted?: boolean;
}

const StudyUserItemContainer = ({ studyUser, isHost, isAccepted = true }: StudyUserItemContainerProps): JSX.Element => {
	const { openModal } = useModal();
	const onClick = () => {
		openModal(ModalKeyEnum.ApproveCancelModal, studyUser);
	};

	// TODO
	// Link 버그 수정
	return (
		<>
			{/* <Link to={`/user/${studyUser?.userId}`}> */}
			<StudyUserItemPresenter studyUser={studyUser} onClick={onClick} isHost={isHost} isAccepted={isAccepted} />
		</>
		//  </Link>
	);
};

export default StudyUserItemContainer;
