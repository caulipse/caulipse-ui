import React from 'react';
import { Button, Container, Typography, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';

interface IReportModalPresenterProps extends IModalContainerCommonProps {
	onClick: () => void;
	onChange: (params: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const ReportModalPresenter = ({ open, onClose, onClick, onChange, value }: IReportModalPresenterProps): JSX.Element => {
	return (
		<SimpleModal open={open} onClose={onClose} title="신고" height="18.688rem" footer={false}>
			<Container className="simple-modal-content-container">
				<RadioGroup value={value} onChange={onChange}>
					<FormControlLabel
						className={value === '1' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="1"
						control={<Radio />}
						label="신고1"
					/>
					<FormControlLabel
						className={value === '2' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="2"
						control={<Radio />}
						label="신고2"
					/>
					<FormControlLabel
						className={value === '' ? 'radio-container selected' : 'radio-container'}
						labelPlacement="start"
						value="3"
						control={<Radio />}
						label="신고3"
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

export default ReportModalPresenter;
