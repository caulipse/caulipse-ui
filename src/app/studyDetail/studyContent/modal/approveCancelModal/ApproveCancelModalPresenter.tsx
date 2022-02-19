import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';

interface IApproveCancelModalPresenterProps extends IModalContainerCommonProps {
	onClick: () => void;
	nickname: string;
}

const ApproveCancelModalPresenter = ({
	open,
	onClose,
	onClick,
	nickname,
}: IApproveCancelModalPresenterProps): JSX.Element => {
	return (
		<SimpleModal
			open={open}
			onClose={onClose}
			title="수락 취소"
			titleStyle={{ color: '#fa1e69' }}
			height="12.688rem"
			footer={false}
		>
			<Container className="simple-modal-content-container">
				<Typography style={{ color: '#636363', textAlign: 'center', fontSize: '0.75rem' }}>
					{nickname}님이 스터디에서 제외됩니다.
				</Typography>
				<Container style={{ padding: 0, marginTop: '2rem', display: 'flex' }}>
					<Button className="simple-modal-rounded-button cancel" onClick={() => onClose(false)}>
						취소
					</Button>
					<Button className="simple-modal-rounded-button secondary horizon" onClick={onClick}>
						삭제
					</Button>
				</Container>
			</Container>
		</SimpleModal>
	);
};

export default ApproveCancelModalPresenter;
