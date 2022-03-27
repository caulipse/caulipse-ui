import React, { useState } from 'react';
import { Button, Container, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';
import { useAtom } from 'jotai';
import globalState from '@src/state';
import useFetchStudy from '@src/hooks/remotes/study/useFetchStudy';
import config from '@src/config';
import { REPORT_TYPE_ENUM } from '@src/enum';

const ReportModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [state] = useAtom(globalState);
	const { userId, modal } = state;

	const { data } = useFetchStudy(modal?.params);
	const { study } = data!;

	const {
		REPORT_TYPE_ENUM_0,
		REPORT_TYPE_ENUM_1,
		REPORT_TYPE_ENUM_2,
		REPORT_TYPE_ENUM_3,
		REPORT_TYPE_ENUM_4,
	} = REPORT_TYPE_ENUM;

	const [value, setValue] = useState(REPORT_TYPE_ENUM_0);
	const onClick = () => {
		// TODO
		// 신고 API 연동
	};
	const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setValue((evt.target as HTMLInputElement).value as REPORT_TYPE_ENUM);
	};

	const content = `mailto:${config.mail}?subject=[신고] ${value}&body=* [${study.title}]%0D%0A* 신고자_${userId}%0D%0A* 신고대상_${study.HOST_ID}`;

	return (
		<SimpleModal open={open} onClose={onClose} title="신고" height="24.688rem" footer={false}>
			<Container className="simple-modal-content-container">
				<RadioGroup value={value} onChange={onChange}>
					<FormControlLabel
						className={value === REPORT_TYPE_ENUM_0 ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value={REPORT_TYPE_ENUM_0}
						control={<Radio />}
						label={REPORT_TYPE_ENUM_0}
					/>
					<FormControlLabel
						className={value === REPORT_TYPE_ENUM_1 ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value={REPORT_TYPE_ENUM_1}
						control={<Radio />}
						label={REPORT_TYPE_ENUM_1}
					/>
					<FormControlLabel
						className={value === REPORT_TYPE_ENUM_2 ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value={REPORT_TYPE_ENUM_2}
						control={<Radio />}
						label={REPORT_TYPE_ENUM_2}
					/>
					<FormControlLabel
						className={value === REPORT_TYPE_ENUM_3 ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value={REPORT_TYPE_ENUM_3}
						control={<Radio />}
						label={REPORT_TYPE_ENUM_3}
					/>
					<FormControlLabel
						className={value === REPORT_TYPE_ENUM_4 ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value={REPORT_TYPE_ENUM_4}
						control={<Radio />}
						label={REPORT_TYPE_ENUM_4}
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
