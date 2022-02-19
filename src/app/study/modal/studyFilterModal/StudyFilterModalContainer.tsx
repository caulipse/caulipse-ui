import React, { ChangeEvent, useState, useEffect } from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import StudyFilterModalPresenter from './StudyFilterModalPresenter';

const StudyFilterModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [selectedFrequencies, setSelectedFrequencies] = useState([] as string[]);
	const [selectedDays, setSelectedDays] = useState([] as string[]);
	const [selectedPlaces, setSelectedPlaces] = useState([] as string[]);

	const onClickCancel = () => {
		// TODO
		// 필터 clear 로직
		console.info('StudyFilterModalContainer');
	};

	const onClick = () => {
		// TODO
		// 필터 적용 API 연동
		console.info('StudyFilterModalContainer');
	};

	const onChangeFrequencies = (value: string) => {
		if (selectedFrequencies.includes(value)) {
			setSelectedFrequencies(selectedFrequencies.filter((item) => item !== value));
		} else {
			setSelectedFrequencies(selectedFrequencies.concat(value));
		}
	};

	const onChangeDays = (value: string) => {
		if (selectedDays.includes(value)) {
			setSelectedDays(selectedDays.filter((item) => item !== value));
		} else {
			setSelectedDays(selectedDays.concat(value));
		}
	};

	const onChangePlaces = (value: string) => {
		if (selectedPlaces.includes(value)) {
			setSelectedPlaces(selectedPlaces.filter((item) => item !== value));
		} else {
			setSelectedPlaces(selectedPlaces.concat(value));
		}
	};

	return (
		<StudyFilterModalPresenter
			open={open}
			onClose={onClose}
			onClickCancel={onClickCancel}
			onClick={onClick}
			selectedFrequencies={selectedFrequencies}
			onChangeFrequencies={onChangeFrequencies}
			selectedDays={selectedDays}
			onChangeDays={onChangeDays}
			selectedPlaces={selectedPlaces}
			onChangePlaces={onChangePlaces}
		/>
	);
};

export default StudyFilterModalContainer;
