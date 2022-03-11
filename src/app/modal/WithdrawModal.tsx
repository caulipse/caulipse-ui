import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';
import useDeleteUser from '@src/hooks/remotes/user/useDeleteUser';

const WithdrawModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const deleteUser = useDeleteUser();

	const onClick = () => {
		deleteUser.mutate();
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
				<Typography style={{ color: '#636363', textAlign: 'center', fontSize: '0.75rem' }}>문구 미정</Typography>
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
