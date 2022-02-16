import React, { ChangeEvent } from 'react';
import './index.scss';
import { Button, Container, Switch } from '@material-ui/core';
import Modal from '@common/modal/Modal';
import CloseIcon from '@common/icon/CloseIcon';
import { IModalContainerCommonProps } from '@common/modal/types';
import '@common/modal/common.scss';

interface IApplyModalPresenterProps extends IModalContainerCommonProps {
	onClick: () => void;
	isPublic: boolean;
	disabled: boolean;
	value: string;
	onChangeValue: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
	onChangeIsPublic: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const ApplyModalPresenter = ({
	open,
	onClose,
	onClick,
	isPublic,
	disabled,
	value,
	onChangeValue,
	onChangeIsPublic,
}: IApplyModalPresenterProps): JSX.Element => {
	return (
		<Modal open={open} onClose={onClose} height="40.438rem">
			<Container className="modal-root-container apply-modal-container">
				<Container className="modal-title-container">
					<span>스터디 신청</span>
					<CloseIcon onClick={() => onClose(false)} />
				</Container>
				<Container className="apply-modal-sub-title-container">
					<span>한줄 소개글</span>
				</Container>
				<textarea maxLength={60} className="text-area" value={value} onChange={onChangeValue} />
				<Container className="apply-modal-sub-title-container space-between">
					<span>학과정보 공개</span>
					<Switch className="apply-modal-switch" onChange={onChangeIsPublic} checked={isPublic} />
				</Container>
				<Container className="apply-modal-helper-text-container">
					<span>이 부분 유도 텍스트 들어가는 곳</span>
				</Container>
				<Button disabled={disabled} onClick={onClick}>
					신청하기!
				</Button>
			</Container>
		</Modal>
	);
};

export default ApplyModalPresenter;
