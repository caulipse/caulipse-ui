import React from 'react';
import { StudyUser } from '@api/types';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@common/modal/enum';
import StudyUserItemPresenter from './StudyUserItemPresenter';

interface StudyUserItemContainerProps {
	studyUser: StudyUser;
}

const StudyUserItemContainer = ({ studyUser }: StudyUserItemContainerProps): JSX.Element => {
	const { openModal } = useModal();
	const onClick = () => {
		openModal(ModalKeyEnum.ApproveCancelModal);
	};

	// TODO
	// Link 버그 수정
	return (
		<>
			{/* <Link to={`/user/${studyUser?.userId}`}> */}
			<StudyUserItemPresenter studyUser={studyUser} onClick={onClick} />
		</>
		//  </Link>
	);
};

export default StudyUserItemContainer;
