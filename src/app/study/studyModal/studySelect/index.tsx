import { Box, Container, Grid } from '@material-ui/core';
import { days, frequencies, places } from '@src/app/modal/StudyFilterModal';
import Chip from '@src/components/common/chip/Chip';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import categories from '@src/const';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { IoAdd, IoRemove } from 'react-icons/io5';
import './index.scss';

interface StudySelectProps {
	selectedDate: Date;
	setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
	selectedCapacity: number;
	setSelectedCapacity: React.Dispatch<React.SetStateAction<number>>;
	selectedMainCategoryCode: number;
	setSelectedMainCategoryCode: React.Dispatch<React.SetStateAction<number>>;
	selectedSubCategoryCode: number;
	setSelectedSubCategoryCode: React.Dispatch<React.SetStateAction<number>>;
	selectedFrequencies: string;
	setSelectedFrequencies: React.Dispatch<React.SetStateAction<string>>;
	selectedDays: string[];
	setSelectedDays: React.Dispatch<React.SetStateAction<string[]>>;
	selectedPlaces: string[];
	setSelectedPlaces: React.Dispatch<React.SetStateAction<string[]>>;
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
}: StudySelectProps): JSX.Element => {
	return (
		<>
			<Box className="edit-study-modal-body-row">
				<Box className="edit-study-modal-body-col">
					<Box className="edit-study-modal-title">모집 마감일</Box>
					<Box className="edit-study-modal-subtitle">23:59분 이후 마감됩니다</Box>
				</Box>
				<Box>
					<ReactDatePicker
						locale="ko"
						dropdownMode="select"
						selected={selectedDate}
						onChange={(date: Date) => setSelectedDate(date)}
						className="edit-study-modal-date-picker"
						dateFormat="yyyy/MM/dd"
					/>
				</Box>
			</Box>
			<Box className="edit-study-modal-body-divider" />
			<Box className="edit-study-modal-body-row">
				<Box className="edit-study-modal-body-col">
					<Box className="edit-study-modal-title">스터디 정원</Box>
					<Box className="edit-study-modal-subtitle">모집자를 포함한 수입니다</Box>
				</Box>
				<Box className="edit-study-modal-body-row">
					<IoRemove
						className="edit-study-modal-body-round-outline-btn"
						color="#1574e3"
						onClick={() => setSelectedCapacity((value) => (value > 2 ? value - 1 : value))}
					/>
					<Box className="edit-study-modal-title mh1rem">{selectedCapacity}</Box>
					<IoAdd
						className="edit-study-modal-body-round-btn"
						color="#ffffff"
						onClick={() => setSelectedCapacity((value) => value + 1)}
					/>
				</Box>
			</Box>
			<Box className="edit-study-modal-title mt2rem">카테고리</Box>
			<Box className="edit-study-modal-body-row mt1rem">
				<CommonTextField
					className="profile-edit-grade-select"
					value={selectedMainCategoryCode}
					onChange={(e) => setSelectedMainCategoryCode(e.target.value)}
					textFieldProps={{ select: true, variant: 'outlined', SelectProps: { native: true } }}
				>
					{categories.map((mainCategoryItem) => (
						<option key={mainCategoryItem.code} value={mainCategoryItem.code}>
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
						.find((mainCategoryItem) => mainCategoryItem.code === Number(selectedMainCategoryCode))
						?.subCategories.map((subCategoryItem) => (
							<option key={subCategoryItem.code} value={subCategoryItem.code}>
								{subCategoryItem.label}
							</option>
						))}
				</CommonTextField>
			</Box>
			<Box className="edit-study-modal-body-divider" />
			<Container className="study-filter-modal-row">
				<span className="edit-study-modal-title">스터디 정원</span>
				<Grid container spacing={1}>
					{frequencies.map((item) => {
						const handleClick = () => {
							setSelectedFrequencies(item);
						};
						return (
							<Grid key={item} item xs={4} className="modal-chip-item">
								<Chip label={item} selected={item === selectedFrequencies} onClick={handleClick} />
							</Grid>
						);
					})}
				</Grid>
			</Container>
			<Container className="study-filter-modal-row">
				<span className="edit-study-modal-title">요일</span>
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
						return <Chip key={item} label={item} selected={isSelected} onClick={handleClick} />;
					})}
				</Container>
			</Container>
			<Container className="study-filter-modal-row">
				<span className="edit-study-modal-title">장소{'\t'}</span>
				<span className="edit-study-modal-subtitle">최대 3개까지 선택 가능합니다</span>
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
						return <Chip key={item} selected={isSelected} label={item} onClick={handleClick} />;
					})}
				</Container>
			</Container>
		</>
	);
};

export default StudySelect;
