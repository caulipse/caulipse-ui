import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { SnackbarTypeEnum } from '@common/snackbar/types';
import useDeleteStudy from '@src/hooks/remotes/study/useDeleteStudy';
import { modalState as globalModalState } from '@src/state';
import { useAtom } from 'jotai';

const StudyDeleteModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const deleteStudy = useDeleteStudy();
	const { openSnackbar } = useSnackbar();
	const [state] = useAtom(globalModalState);
	const onClick = () => {
		deleteStudy.mutate(state?.params);
		onClose(false);
		openSnackbar('모집글이 삭제되었습니다', SnackbarTypeEnum.secondary);
	};
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
					작성한 글은 저장이 안됩니다! 정말로 삭제하시겠어요?
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

export default StudyDeleteModal;
