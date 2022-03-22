import React, { ChangeEvent, useCallback, useState, useMemo } from 'react';
import './applyModal.scss';
import { Container } from '@material-ui/core';
import Modal from '@common/modal/Modal';
import CloseButton from '@common/iconButton/CloseButton';
import CommonButton from '@common/button/CommonButton';
import Switch from '@common/switch/Switch';
import { IModalContainerCommonProps } from '@common/modal/types';
import '@common/modal/common.scss';
import usePostStudyUser from '@src/hooks/remotes/studyUser/usePostStudyUser';
import { useAtom } from 'jotai';
import globalState from '@src/state';

const ApplyModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [value, setValue] = useState('시와 별 이름을 가을로 위로무에 하나에 있습니다. 새겨지는 같이 어머니 있습니다.');
	const [isPublic, setIsPublic] = useState(false);
	const postStudyUser = usePostStudyUser();
	const [state] = useAtom(globalState);
	const { modal } = state;

	const onClick = useCallback(() => {
		onClose(false);
		postStudyUser.mutate({
			id: modal.params,
			data: {
				tempBio: value,
			},
		});
	}, []);

	const onChangeValue = useCallback((evt: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(evt.target.value);
	}, []);

	const onChangeIsPublic = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		setIsPublic(evt.target.checked);
	}, []);

	const disabled = useMemo(() => {
		return value.length < 5;
	}, [value]);

	return (
		<Modal open={open} onClose={onClose} height="40.438rem">
			<Container className="modal-root-container apply-modal-container modal-space-between-container">
				<Container>
					<Container className="modal-title-container">
						<span>스터디 신청</span>
						<CloseButton onClick={() => onClose(false)} />
					</Container>
					<Container className="apply-modal-sub-title-container">
						<span>한줄 소개글</span>
					</Container>
					<textarea maxLength={60} className="text-area" value={value} onChange={onChangeValue} />
					<Container className="apply-modal-sub-title-container space-between">
						<span>학과정보 공개</span>
						<Switch onChange={onChangeIsPublic} checked={isPublic} />
					</Container>
					<Container className="apply-modal-helper-text-container">
						<span>이 부분 유도 텍스트 들어가는 곳</span>
					</Container>
				</Container>
				<Container>
					<CommonButton title="신청하기!" onClick={onClick} disabled={disabled} />
				</Container>
			</Container>
		</Modal>
	);
};

export default ApplyModal;
