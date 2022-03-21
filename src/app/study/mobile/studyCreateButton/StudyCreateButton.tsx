import React from 'react';
import { Button } from '@material-ui/core';
import { IoAdd } from 'react-icons/io5';
import { IButtonProps } from '@common/button/types';
import './index.scss';

type StudyCreateButton = Omit<IButtonProps, 'title'>;

const StudyCreateButton = ({ onClick }: StudyCreateButton) => {
	return (
		<Button
			className="study-create-button"
			onClick={onClick}
			startIcon={<IoAdd className="study-create-button-icon" />}
		>
			스터디 등록
		</Button>
	);
};

export default StudyCreateButton;
