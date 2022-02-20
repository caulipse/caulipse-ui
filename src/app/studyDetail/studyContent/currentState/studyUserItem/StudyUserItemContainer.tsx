import { GetStudyUserResponse, StudyUser } from '@src/api/response/study';
import { UserPreview } from '@src/api/response/user';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApproveCancelModalContainer from '@src/app/studyDetail/studyContent/modal/approveCancelModal/ApproveCancelModalContainer';
import StudyUserItemPresenter from './StudyUserItemPresenter';

interface StudyUserItemContainerProps {
	studyUser: GetStudyUserResponse;
}

const StudyUserItemContainer = ({ studyUser }: StudyUserItemContainerProps): JSX.Element => {
	const [open, setOpen] = useState(false);

	const onClick = () => {
		setOpen(!open);
	};

	// TODO
	// Link 버그 수정
	return (
		<>
			{/* <Link to={`/user/${studyUser?.userId}`}> */}
			<StudyUserItemPresenter studyUser={studyUser} onClick={onClick} />
			<ApproveCancelModalContainer open={open} onClose={setOpen} nickname="dummy" />
		</>
		//  </Link>
	);
};

export default StudyUserItemContainer;
