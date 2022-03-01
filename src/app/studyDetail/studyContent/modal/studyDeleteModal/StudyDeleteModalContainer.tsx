import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { SnackbarTypeEnum } from '@common/snackbar/types';
import StudyDeleteModalPresenter from './StudyDeleteModalPresenter';

const StudyDeleteModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const { openSnackbar } = useSnackbar();
	const onClick = () => {
		// TODO
		// 모집글 삭제 API 연동
		onClose(false);
		openSnackbar('모집글이 삭제되었습니다', SnackbarTypeEnum.secondary);
	};
	return <StudyDeleteModalPresenter open={open} onClose={onClose} onClick={onClick} />;
};

export default StudyDeleteModalContainer;
