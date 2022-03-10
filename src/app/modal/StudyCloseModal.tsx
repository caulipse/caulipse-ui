import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';

const StudyCloseModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const onClick = () => {
		// TODO
		// 스터디 마감 API 연동
	};
	// TODO dummy data API 연동

	// FIXME dummy data
	const current = 4;
	const total = 5;
	return (
		<SimpleModal
			open={open}
			onClose={onClose}
			title={`모집 마감 (${current} / ${total})`}
			height="12.688rem"
			footer={false}
		>
			<Container className="simple-modal-content-container">
				<Typography style={{ color: '#636363', textAlign: 'center', fontSize: '0.75rem' }}>
					아직 {total - current}자리가 남았네요.. 정말 마감하시겠어요?
				</Typography>
				<Container style={{ padding: 0, marginTop: '2rem', display: 'flex' }}>
					<Button className="simple-modal-rounded-button cancel" onClick={() => onClose(false)}>
						닫기
					</Button>
					<Button className="simple-modal-rounded-button primary horizon" onClick={onClick}>
						마감하기
					</Button>
				</Container>
			</Container>
		</SimpleModal>
	);
};

export default StudyCloseModal;
