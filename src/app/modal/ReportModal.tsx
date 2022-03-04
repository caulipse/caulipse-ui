import React, { useState } from 'react';
import { Button, Container, Typography, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';

const ReportModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	// FIXME: key 값은 변경할 예정임
	const [value, setValue] = useState('0');
	const onClick = () => {
		// TODO
		// 신고 API 연동
	};
	const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setValue((evt.target as HTMLInputElement).value);
	};
	return (
		<SimpleModal open={open} onClose={onClose} title="신고" height="18.688rem" footer={false}>
			<Container className="simple-modal-content-container">
				<RadioGroup value={value} onChange={onChange}>
					<FormControlLabel
						className={value === '0' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="0"
						control={<Radio />}
						label="욕설 및 비방"
					/>
					<FormControlLabel
						className={value === '1' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="1"
						control={<Radio />}
						label="사칭, 사기"
					/>
					<FormControlLabel
						className={value === '2' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="2"
						control={<Radio />}
						label="상업적 광고"
					/>
					<FormControlLabel
						className={value === '3' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="3"
						control={<Radio />}
						label="음란물, 불건전한 게시물"
					/>
					<FormControlLabel
						className={value === '4' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="4"
						control={<Radio />}
						label="기타"
					/>
				</RadioGroup>
				<Container style={{ padding: 0, marginTop: '2rem', display: 'flex' }}>
					<Button className="simple-modal-rounded-button cancel" onClick={() => onClose(false)}>
						취소
					</Button>
					<Button className="simple-modal-rounded-button secondary horizon" onClick={onClick}>
						신고
					</Button>
				</Container>
			</Container>
		</SimpleModal>
	);
};

export default ReportModal;
