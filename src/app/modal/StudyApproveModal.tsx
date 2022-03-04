import React, { useMemo, useState } from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';

const StudyApproveModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const onClick = () => {
		onClose(false);
	};
	// TODO dummy data API 연동

	const current = 4;
	const total = 6;
	const isCompleted = false;

	// const isCompleted = useMemo(() => {
	// 	return current === total;
	// }, [current, total]);

	return (
		<SimpleModal
			open={open}
			onClose={onClose}
			title={`추가완료 (${current} / ${total})`}
			height="12.688rem"
			footer={false}
		>
			<Container className="simple-modal-content-container">
				<Typography style={{ color: '#636363', textAlign: 'center', fontSize: '0.75rem' }}>
					{isCompleted ? '마감버튼을 눌러 스터디원들에게 마감여부를 알려주세요!' : '스터디가 거의 다 완성되고 있어요!'}
				</Typography>
				<Container style={{ padding: 0, marginTop: '2rem', display: 'flex' }}>
					{isCompleted ? (
						<>
							<Button
								className="simple-modal-rounded-button cancel"
								style={{ width: '6rem' }}
								onClick={() => onClose(false)}
							>
								닫기
							</Button>
							<Button className="simple-modal-rounded-button primary horizon" onClick={onClick}>
								모집 마감
							</Button>
						</>
					) : (
						<Button className="simple-modal-rounded-button primary" onClick={() => onClose(false)}>
							확인
						</Button>
					)}
				</Container>
			</Container>
		</SimpleModal>
	);
};

export default StudyApproveModal;
