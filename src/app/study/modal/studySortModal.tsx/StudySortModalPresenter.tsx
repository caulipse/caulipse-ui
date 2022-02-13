import React from 'react';
import { Button, Container, Typography, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';

interface IStudySortModalPresenterProps extends IModalContainerCommonProps {
	onClick: () => void;
	onChange: (params: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const StudySortModalPresenter = ({ open, onClick, onChange, value }: IStudySortModalPresenterProps): JSX.Element => {
	const className = 'radio-container radio-primary';
	const selectedClassName = 'radio-container radio-primary selected-black';
	return (
		<SimpleModal open={open} onClose={onClick} title="정렬 기준" height="25.125rem">
			<Container className="simple-modal-content-container">
				<RadioGroup value={value} onChange={onChange}>
					<FormControlLabel
						className={value === 'createdAt:desc' ? selectedClassName : className}
						labelPlacement="start"
						value="createdAt:desc"
						control={<Radio />}
						label="최신순"
					/>
					<FormControlLabel
						className={value === 'createdAt:asc' ? selectedClassName : className}
						labelPlacement="start"
						value="createdAt:asc"
						control={<Radio />}
						label="오래된순"
					/>
					<FormControlLabel
						className={value === 'vacancies:asc' ? selectedClassName : className}
						labelPlacement="start"
						value="vacancies:asc"
						control={<Radio />}
						label="남은 모집인원: 적은 순"
					/>
					<FormControlLabel
						className={value === 'vacancies:desc' ? selectedClassName : className}
						labelPlacement="start"
						value="vacancies:desc"
						control={<Radio />}
						label="남은 모집인원: 많은 순"
					/>
				</RadioGroup>
			</Container>
		</SimpleModal>
	);
};

export default StudySortModalPresenter;
