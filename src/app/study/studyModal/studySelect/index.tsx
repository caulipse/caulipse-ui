import { Box, Container, Grid } from '@material-ui/core';
import { days, frequencies, places } from '@src/app/modal/StudyFilterModal';
import Chip from '@src/components/common/chip/Chip';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import categories from '@src/const';
import React, { useEffect } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { IoAdd, IoRemove } from 'react-icons/io5';
import './index.scss';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames';
import { frequencyMapper, locationMapper, weekdayMapper } from '@src/app/shared/utils/studyMapper';
import { frequencyEnum, locationEnum, weekdayEnum } from '@src/api/types';

registerLocale('ko', ko);

interface StudySelectProps {
	selectedDate: Date;
	setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
	selectedCapacity: number;
	setSelectedCapacity: React.Dispatch<React.SetStateAction<number>>;
	selectedMainCategoryCode: number;
	setSelectedMainCategoryCode: React.Dispatch<React.SetStateAction<number>>;
	selectedSubCategoryCode: number;
	setSelectedSubCategoryCode: React.Dispatch<React.SetStateAction<number>>;
	selectedFrequencies: frequencyEnum | '';
	setSelectedFrequencies: React.Dispatch<React.SetStateAction<frequencyEnum | ''>>;
	selectedDays: weekdayEnum[];
	setSelectedDays: React.Dispatch<React.SetStateAction<weekdayEnum[]>>;
	selectedPlaces: locationEnum[];
	setSelectedPlaces: React.Dispatch<React.SetStateAction<locationEnum[]>>;
	initialMembersCount?: number;
}

const StudySelect = ({
	selectedDate,
	setSelectedDate,
	selectedCapacity,
	setSelectedCapacity,
	selectedMainCategoryCode,
	setSelectedMainCategoryCode,
	selectedSubCategoryCode,
	setSelectedSubCategoryCode,
	selectedFrequencies,
	setSelectedFrequencies,
	selectedDays,
	setSelectedDays,
	selectedPlaces,
	setSelectedPlaces,
	initialMembersCount,
}: StudySelectProps): JSX.Element => {
	useEffect(() => {
		const initialSubCategoryCode = categories.find((categoryItem) => categoryItem?.code === selectedMainCategoryCode)
			?.subCategories[0]?.code;
		setSelectedSubCategoryCode(Number(initialSubCategoryCode));
	}, [selectedMainCategoryCode]);

	return (
		<>
			<Box className="study-select-body-row mt2rem">
				<Box className="study-select-body-col">
					<Box className="study-select-title">모집 마감일</Box>
					<Box className="study-select-subtitle">23:59분에 마감됩니다</Box>
				</Box>
				<Box>
					<ReactDatePicker
						locale="ko"
						dropdownMode="select"
						selected={selectedDate}
						onChange={(date: Date) => setSelectedDate(date)}
						className="study-select-date-picker"
						dateFormat="yyyy/MM/dd"
						minDate={new Date()}
					/>
				</Box>
			</Box>
			<Box className="study-select-body-divider" />
			<Box className="study-select-body-row">
				<Box className="study-select-body-col">
					<Box className="study-select-title">스터디 정원</Box>
					<Box className="study-select-subtitle">모집자를 포함한 수입니다</Box>
				</Box>
				<Box className="study-select-body-row">
					<IoRemove
						className={classNames('study-select-body-round-outline-btn', {
							'study-select-body-btn-disabled': selectedCapacity <= (initialMembersCount ?? 2),
						})}
						color="#1574e3"
						onClick={() => setSelectedCapacity((value) => (value > (initialMembersCount ?? 2) ? value - 1 : value))}
					/>
					<Box className="study-select-title mh1rem">{selectedCapacity}</Box>
					<IoAdd
						className="study-select-body-round-btn"
						color="#ffffff"
						onClick={() => setSelectedCapacity((value) => value + 1)}
					/>
				</Box>
			</Box>
			<Box className="study-select-title mt2rem">카테고리</Box>
			<Box className="study-select-body-row mt1rem">
				<CommonTextField
					className="profile-edit-grade-select"
					value={selectedMainCategoryCode}
					onChange={(e) => setSelectedMainCategoryCode(e.target.value)}
					textFieldProps={{ select: true, variant: 'outlined', SelectProps: { native: true } }}
				>
					{categories.map((mainCategoryItem) => (
						<option key={mainCategoryItem?.code} value={mainCategoryItem?.code}>
							{mainCategoryItem.label}
						</option>
					))}
				</CommonTextField>
				<CommonTextField
					className="profile-edit-status-select"
					value={selectedSubCategoryCode}
					onChange={(e) => setSelectedSubCategoryCode(e.target.value)}
					textFieldProps={{ select: true, variant: 'outlined', SelectProps: { native: true } }}
				>
					{categories
						.find((mainCategoryItem) => mainCategoryItem?.code === Number(selectedMainCategoryCode))
						?.subCategories.map((subCategoryItem) => (
							<option key={subCategoryItem?.code} value={subCategoryItem?.code}>
								{subCategoryItem.label}
							</option>
						))}
				</CommonTextField>
			</Box>
			<Box className="study-select-body-divider" />
			<Container className="study-filter-modal-row">
				<span className="study-select-title">스터디 빈도</span>
				<Grid container spacing={1}>
					{frequencies.map((item) => {
						const handleClick = () => {
							setSelectedFrequencies(item);
						};
						return (
							<Grid key={item} item xs={4} className="modal-chip-item">
								<Chip label={frequencyMapper[item]} selected={item === selectedFrequencies} onClick={handleClick} />
							</Grid>
						);
					})}
				</Grid>
			</Container>
			<Container className="study-filter-modal-row">
				<span className="study-select-title">요일</span>
				<Container className="study-filter-modal-row-flex-container study-filter-modal-row-flex-container-days">
					{days.map((item) => {
						const isSelected = selectedDays.includes(item);
						const handleClick = () => {
							if (isSelected) {
								setSelectedDays((arr) => arr.filter((arrItem) => arrItem !== item));
							} else {
								setSelectedDays((arr) => [...arr, item]);
							}
						};
						return <Chip key={item} label={weekdayMapper[item]} selected={isSelected} onClick={handleClick} />;
					})}
				</Container>
			</Container>
			<Container className="study-filter-modal-row">
				<span className="study-select-title">장소{'\t'}</span>
				<span className="study-select-subtitle">최대 3개까지 선택 가능합니다</span>
				<Container className="study-filter-modal-row-flex-container study-filter-modal-row-flex-container-places">
					{places.map((item) => {
						const isSelected = selectedPlaces.includes(item);
						const handleClick = () => {
							if (isSelected) {
								setSelectedPlaces((arr) => arr.filter((arrItem) => arrItem !== item));
							} else if (selectedPlaces.length < 3) {
								setSelectedPlaces((arr) => [...arr, item]);
							} else {
								setSelectedPlaces((arr) => [...arr.slice(1, 3), item]);
							}
						};
						return <Chip key={item} selected={isSelected} label={locationMapper[item]} onClick={handleClick} />;
					})}
				</Container>
			</Container>
		</>
	);
};

export default StudySelect;
