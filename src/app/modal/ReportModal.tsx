import React, { useState } from 'react';
import { Button, Container, Typography, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';
import { useAtom } from 'jotai';
import globalState from '@src/state';
import useFetchStudy from '@src/hooks/remotes/study/useFetchStudy';
import config from '@src/config';

const ReportModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [state] = useAtom(globalState);
	const { userId, modal } = state;

	const { data } = useFetchStudy(modal?.params);
	const { study } = data!;

	const [value, setValue] = useState('욕설 및 비방');
	const onClick = () => {
		// TODO
		// 신고 API 연동
	};
	const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setValue((evt.target as HTMLInputElement).value);
	};

	const content = `mailto:${config.mail}?subject=[신고] ${value}&body=* [${study.title}]%0D%0A* 신고자_${userId}%0D%0A* 신고대상_${study.HOST_ID}`;

	return (
		<SimpleModal open={open} onClose={onClose} title="신고" height="24.688rem" footer={false}>
			<Container className="simple-modal-content-container">
				<RadioGroup value={value} onChange={onChange}>
					<FormControlLabel
						className={value === '욕설 및 비방' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="욕설 및 비방"
						control={<Radio />}
						label="욕설 및 비방"
					/>
					<FormControlLabel
						className={value === '사칭, 사기' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="사칭, 사기"
						control={<Radio />}
						label="사칭, 사기"
					/>
					<FormControlLabel
						className={value === '상업적 광고' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="상업적 광고"
						control={<Radio />}
						label="상업적 광고"
					/>
					<FormControlLabel
						className={value === '음란물, 불건전한 게시물' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="음란물, 불건전한 게시물"
						control={<Radio />}
						label="음란물, 불건전한 게시물"
					/>
					<FormControlLabel
						className={value === '기타' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="기타"
						control={<Radio />}
						label="기타"
					/>
				</RadioGroup>
				<Container style={{ padding: 0, marginTop: '2rem', display: 'flex' }}>
					<Button className="simple-modal-rounded-button cancel" onClick={() => onClose(false)}>
						취소
					</Button>
					<a href={content} style={{ width: '100%', marginLeft: '1rem' }}>
						<Button
							className="simple-modal-rounded-button secondary horizon"
							style={{ marginLeft: 0 }}
							onClick={onClick}
						>
							신고
						</Button>
					</a>
				</Container>
			</Container>
		</SimpleModal>
	);
};

export default ReportModal;
