import React from 'react';
import { Button, Container } from '@material-ui/core';
import '@common/modal/common.scss';
import { IModalContainerCommonProps } from '@common/modal/types';
import SimpleModal from '@common/modal/SimpleModal';

interface IUserStudyMoreModalPresenterProps extends IModalContainerCommonProps {
	onClickCancel: () => void;
	onClickReport: () => void;
}

const UserStudyMoreModalPresenter = ({
	open,
	onClose,
	onClickCancel,
	onClickReport,
}: IUserStudyMoreModalPresenterProps): JSX.Element => {
	// TODO
	// api 로 신청자 여부를 확인하여 신청자가 아닐 경우 "신청취소" 버튼은 숨김 처리해야함.
	return (
		<SimpleModal open={open} onClose={onClose} height="12.5rem">
			<Container className="simple-modal-content-container">
				<Button className="simple-modal-button secondary" onClick={onClickCancel}>
					신청 취소
				</Button>
				<Button className="simple-modal-button primary" onClick={onClickReport}>
					신고하기
				</Button>
			</Container>
		</SimpleModal>
	);
};

export default UserStudyMoreModalPresenter;
