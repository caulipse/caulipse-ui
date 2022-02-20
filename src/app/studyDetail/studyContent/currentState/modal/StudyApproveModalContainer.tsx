import React, { useState } from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import StudyCloseModalContainer from '@studyDetail/studyContent/modal/studyCloseModal/StudyCloseModalContainer';
import StudyApproveModalPresenter from './StudyApproveModalPresenter';

const StudyApproveModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [openModal, setOpenModal] = useState(false);
	const onClick = () => {
		onClose(false);
		setOpenModal(!openModal);
	};
	// TODO dummy data API 연동
	return (
		<>
			<StudyApproveModalPresenter open={open} onClose={onClose} onClick={onClick} current={8} total={8} />
			<StudyCloseModalContainer open={openModal} onClose={setOpenModal} />
		</>
	);
};

export default StudyApproveModalContainer;
