import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';
import { useAtom } from 'jotai';
import { modalState } from '@src/state';
import useFetchStudy from '@src/hooks/remotes/study/useFetchStudy';
import useCloseStudy from '@src/hooks/remotes/study/useCloseStudy';

const StudyCloseModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [state] = useAtom(modalState);
	const { data } = useFetchStudy(state.params);
	const closeStudy = useCloseStudy();

	const onClick = () => {
		closeStudy.mutate(state.params);
	};

	return (
		<SimpleModal
			open={open}
			onClose={onClose}
			title={`모집 마감 (${data?.membersCount} / ${data?.capacity})`}
			height="12.688rem"
			footer={false}
		>
			<Container className="simple-modal-content-container">
				<Typography style={{ color: '#636363', textAlign: 'center', fontSize: '0.75rem' }}>
					{data?.capacity === data?.membersCount
						? `${data?.title} 의 모집을 마감합니다.`
						: `아직 ${data ? data?.capacity - data?.membersCount : 0}자리가 남았어요. 이대로 마감할까요?`}
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
