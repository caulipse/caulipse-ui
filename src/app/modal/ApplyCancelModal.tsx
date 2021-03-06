import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { SnackbarTypeEnum } from '@common/snackbar/types';
import useDeleteStudyUser from '@src/hooks/remotes/studyUser/useDeleteStudyUser';
import { useAtom } from 'jotai';
import { modalState, userState as globalUserState } from '@src/state';
import { useQueryClient } from 'react-query';
import QUERY_KEY from '@src/hooks/remotes';

const ApplyCancelModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const { openSnackbar } = useSnackbar();
	const deleteStudyUser = useDeleteStudyUser();
	const [state] = useAtom(modalState);
	const [userState] = useAtom(globalUserState);

	const client = useQueryClient();

	const onClick = () => {
		deleteStudyUser.mutate(
			{ studyId: state.params, userId: userState.userId },
			{
				onSuccess: () => {
					onClose(false);
					openSnackbar('스터디 신청을 취소하였습니다.');
					client.refetchQueries(`${QUERY_KEY.FETCH_STUDY}/${state.params}`);
				},
				onError: () => {
					onClose(false);
					openSnackbar('스터디 신청 취소에 실패하였습니다. :(', SnackbarTypeEnum.secondary);
				},
			}
		);
	};
	return (
		<SimpleModal
			open={open}
			onClose={onClose}
			title="신청 취소"
			titleStyle={{ color: '#fa1e69' }}
			height="12.688rem"
			footer={false}
		>
			<Container className="simple-modal-content-container">
				<Typography style={{ color: '#636363', textAlign: 'center', fontSize: '0.75rem' }}>
					스터디 신청을 취소합니다.
				</Typography>
				<Container style={{ padding: 0, marginTop: '2rem', display: 'flex' }}>
					<Button className="simple-modal-rounded-button cancel" onClick={() => onClose(false)}>
						취소
					</Button>
					<Button className="simple-modal-rounded-button secondary horizon" onClick={onClick}>
						확인
					</Button>
				</Container>
			</Container>
		</SimpleModal>
	);
};

export default ApplyCancelModal;
