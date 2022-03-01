import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { SnackbarTypeEnum } from '@common/snackbar/types';
import ApplyCancelModalPresenter from './ApplyCancelModalPresenter';

const ApplyCancelModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const { openSnackbar } = useSnackbar();
	const onClick = () => {
		// TODO
		// 신청 취소 API 연동
		onClose(false);
		openSnackbar('스터디 신청을 취소하였습니다', SnackbarTypeEnum.secondary);
	};
	return <ApplyCancelModalPresenter open={open} onClose={onClose} onClick={onClick} />;
};

export default ApplyCancelModalContainer;
