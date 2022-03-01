import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { SnackbarTypeEnum } from '@common/snackbar/types';
import ApproveCancelModalPresenter from './ApproveCancelModalPresenter';

const ApproveCancelModalContainer = ({
	open,
	onClose,
	nickname,
}: IModalContainerCommonProps & { nickname: string }): JSX.Element => {
	const { openSnackbar } = useSnackbar();
	const onClick = () => {
		// TODO
		// 수락 취소  API 연동
		onClose(false);
		openSnackbar('스터디 수락을 취소하였습니다', SnackbarTypeEnum.secondary);
	};
	return <ApproveCancelModalPresenter open={open} onClose={onClose} onClick={onClick} nickname={nickname} />;
};

export default ApproveCancelModalContainer;
