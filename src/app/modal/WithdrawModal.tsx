import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';
import useDeleteUser from '@src/hooks/remotes/user/useDeleteUser';
import { useAtom } from 'jotai';
import { userState as globalUserState, modalState as globalModalState } from '@src/state';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { deleteAllCookies } from '../shared/utils/deleteAllCookies';

const WithdrawModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const deleteUser = useDeleteUser();

	const { openSnackbar } = useSnackbar();
	const [userState, setUserState] = useAtom(globalUserState);

	const onClick = () => {
		deleteUser.mutate(undefined, {
			onSuccess: (response: any) => {
				openSnackbar('탈퇴가 완료되었습니다.');
				deleteAllCookies();
				setUserState({ ...userState, userId: '' });
				onClose(false);
				window.location.assign('/');
			},
			onError: (e: any) => {
				window.alert('탈퇴에 실패하였습니다.');
			},
		});
	};
	return (
		<SimpleModal
			open={open}
			onClose={onClose}
			title="서비스 탈퇴"
			titleStyle={{ color: '#fa1e69' }}
			height="12.688rem"
			footer={false}
		>
			<Container className="simple-modal-content-container">
				<Typography style={{ color: '#636363', textAlign: 'center', fontSize: '0.75rem' }}>
					계정 탈퇴 시, 영구적으로 복구가 불가능합니다.
				</Typography>
				<Container style={{ padding: 0, marginTop: '2rem', display: 'flex' }}>
					<Button className="simple-modal-rounded-button cancel" onClick={() => onClose(false)}>
						취소
					</Button>
					<Button className="simple-modal-rounded-button secondary horizon" onClick={onClick}>
						탈퇴하기
					</Button>
				</Container>
			</Container>
		</SimpleModal>
	);
};

export default WithdrawModal;
