import React, { ChangeEvent, useCallback, useEffect, useState, useMemo } from 'react';
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
import { userState as globalUserState, modalState as globalModalState } from '@src/state';
import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { SnackbarTypeEnum } from '@common/snackbar/types';

const ApplyModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const postStudyUser = usePostStudyUser();
	const [userState] = useAtom(globalUserState);
	const [modalState] = useAtom(globalModalState);
	const { openSnackbar } = useSnackbar();
	const { params } = modalState;
	const { userId } = userState;
	const { data } = useFetchUserProfile(userId);

	const [value, setValue] = useState(data?.userProfile?.bio ?? '');
	const [isPublic, setIsPublic] = useState(true);

	useEffect(() => {
		if (data?.userProfile?.bio) {
			setValue(data?.userProfile?.bio);
		}
	}, [data]);

	const onClick = () => {
		onClose(false);
		postStudyUser.mutate({
			id: params,
			data: {
				tempBio: value,
			},
		});
		openSnackbar('스터디 신청을 완료하였습니다');
	};

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
					<textarea
						placeholder="신청자 카드에서 보여지는 소개글입니다."
						maxLength={60}
						className="text-area"
						value={value}
						onChange={onChangeValue}
					/>
					<Container className="apply-modal-sub-title-container space-between">
						<span>학과정보 공개</span>
						<Switch onChange={onChangeIsPublic} checked={isPublic} />
					</Container>
					<Container className="apply-modal-helper-text-container">
						<span>전공을 통해 자신을 어필해보세요!</span>
					</Container>
				</Container>
				<Container>
					<CommonButton title="신청하기" onClick={onClick} disabled={disabled} />
				</Container>
			</Container>
		</Modal>
	);
};

export default ApplyModal;
