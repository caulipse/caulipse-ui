import React, { memo, useState } from 'react';
import { Container, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import '@common/modal/common.scss';
import SimpleModal from '@common/modal/SimpleModal';
import { IModalContainerCommonProps } from '@common/modal/types';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import { sortOptions } from '@src/const';

const StudySortModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const className = 'radio-container radio-primary';
	const selectedClassName = 'radio-container radio-primary selected-black';

	const [state, setState] = useAtom(studyListState);

	const [selectedOption, setSelectedOption] = useState(state.sortOption.value);
	const onClick = () => {
		const newOption = sortOptions.find((item) => item.value === selectedOption)!;
		setState({ ...state, sortOption: newOption });
		onClose(false);
	};
	const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption((evt.target as HTMLInputElement).value as string);
	};

	return (
		<SimpleModal open={open} onClose={onClick} title="정렬 기준" height="25.125rem">
			<Container className="simple-modal-content-container">
				<RadioGroup value={selectedOption} onChange={onChange}>
					{sortOptions.map((option) => {
						return (
							<FormControlLabel
								key={option.value}
								labelPlacement="start"
								control={<Radio />}
								label={option.label}
								value={option.value}
								className={selectedOption === option.value ? selectedClassName : className}
							/>
						);
					})}
				</RadioGroup>
			</Container>
		</SimpleModal>
	);
};

export default memo(StudySortModal);
