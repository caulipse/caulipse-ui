import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';

interface IStudyDeleteModalPresenterProps extends IModalContainerCommonProps {
	onClick: () => void;
}

const StudyDeleteModalPresenter = ({ open, onClose, onClick }: IStudyDeleteModalPresenterProps): JSX.Element => {
	return (
		<SimpleModal
			open={open}
			onClose={onClose}
			title="모집글 삭제"
			titleStyle={{ color: '#fa1e69' }}
			height="12.688rem"
			footer={false}
		>
			<Container className="simple-modal-content-container">
				<Typography style={{ color: '#636363', textAlign: 'center', fontSize: '0.75rem' }}>
					삭제 시, 스터디 추가모집이 불가합니다! 같은 문구
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

export default StudyDeleteModalPresenter;
