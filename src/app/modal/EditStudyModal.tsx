import { Box, Button, Container, Grid } from '@material-ui/core';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import classNames from 'classnames';
import DatePicker, { registerLocale } from 'react-datepicker';
import React, { useCallback, useState } from 'react';
import { IoAdd, IoClose, IoRemove } from 'react-icons/io5';
import './editStudyModal.scss';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import categories from '@src/const';
import Chip from '@src/components/common/chip/Chip';
import { days, frequencies, places } from './StudyFilterModal';

registerLocale('ko', ko);

const EDIT_STUDY_TAB_ENUM = {
	TAG: '태그 수정',
	CONTENT: '글 수정',
};
const TITLE_MAX = 40;
const CONTENT_MAX = 500;

const EditStudyModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [currentTab, setCurrentTab] = useState(EDIT_STUDY_TAB_ENUM.TAG);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [selectedMainCategoryCode, setSelectedMainCategoryCode] = useState(100);
	const [selectedSubCategoryCode, setSelectedSubCategoryCode] = useState(101);
	const [selectedCapacity, setSelectedCapacity] = useState(frequencies[0]);
	const [selectedDays, setSelectedDays] = useState<string[]>([days[0]]);
	const [selectedPlaces, setSelectedPlaces] = useState<string[]>([places[0]]);
	const [selectedTitle, setSelectedTitle] = useState<string>('');
	const [selectedContent, setSelectedContent] = useState<string>('');

	const renderHeader = useCallback(() => {
		return (
			<>
				<Box className="edit-study-modal-header-con">
					<IoClose className="edit-study-modal-header-close-icn" color="#ffffff" onClick={() => onClose(false)} />
					<Box className="edit-study-modal-header-title">모집글 수정하기</Box>
					<Box className="edit-study-modal-header-close-icn" />
				</Box>
				<Box className="edit-study-modal-tab-con">
					<Button
						className={classNames('edit-study-modal-tab-btn', {
							'edit-study-modal-tab-btn-selected': currentTab === EDIT_STUDY_TAB_ENUM.TAG,
						})}
						onClick={() => setCurrentTab(EDIT_STUDY_TAB_ENUM.TAG)}
					>
						태그 수정
					</Button>
					<Button
						className={classNames('edit-study-modal-tab-btn', {
							'edit-study-modal-tab-btn-selected': currentTab === EDIT_STUDY_TAB_ENUM.CONTENT,
						})}
						onClick={() => setCurrentTab(EDIT_STUDY_TAB_ENUM.CONTENT)}
					>
						글 수정
					</Button>
				</Box>
			</>
		);
	}, [currentTab]);

	const renderTagEdit = useCallback(() => {
		return (
			<>
				<Box className="edit-study-modal-body-row">
					<Box className="edit-study-modal-body-col">
						<Box className="edit-study-modal-title">모집 마감일</Box>
						<Box className="edit-study-modal-subtitle">23:59분 이후 마감됩니다</Box>
					</Box>
					<Box>
						<DatePicker
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
						<IoRemove className="edit-study-modal-body-round-outline-btn" color="#1574e3" />
						<Box className="edit-study-modal-title mh1rem">4</Box>
						<IoAdd className="edit-study-modal-body-round-btn" color="#ffffff" />
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
								setSelectedCapacity(item);
							};
							return (
								<Grid key={item} item xs={4} className="modal-chip-item">
									<Chip label={item} selected={item === selectedCapacity} onClick={handleClick} />
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
	}, [
		selectedDate,
		selectedMainCategoryCode,
		selectedSubCategoryCode,
		selectedCapacity,
		selectedDays,
		selectedPlaces,
		days,
		frequencies,
		places,
	]);

	const renderContentEdit = useCallback(() => {
		return (
			<>
				<Box className="edit-study-modal-body-content-header">
					<Box className="edit-study-modal-title">제목</Box>
					<Box className="edit-study-modal-subtitle">
						({selectedTitle.length}/{TITLE_MAX})
					</Box>
				</Box>
				<CommonTextField
					className="edit-study-modal-body-content-title-input"
					value={selectedTitle}
					onChange={(e) => setSelectedTitle(e.target.value)}
					textFieldProps={{
						variant: 'outlined',
						minRows: 1,
						placeholder: '제목을 입력해 주세요.',
						multiline: true,
						inputProps: { maxLength: TITLE_MAX },
					}}
				/>
				<Box className="edit-study-modal-body-content-header mt2rem">
					<Box className="edit-study-modal-title">본문</Box>
					<Box className="edit-study-modal-subtitle">
						({selectedContent.length}/{CONTENT_MAX})
					</Box>
				</Box>
				<CommonTextField
					className="edit-study-modal-body-content-title-input"
					value={selectedContent}
					onChange={(e) => setSelectedContent(e.target.value)}
					textFieldProps={{
						variant: 'outlined',
						minRows: 5,
						placeholder: '본문을 입력해 주세요.',
						multiline: true,
						inputProps: { maxLength: CONTENT_MAX },
					}}
				/>
			</>
		);
	}, [selectedTitle, selectedContent]);

	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<>
				{renderHeader()}
				<Box className="edit-study-modal-body-con">
					{currentTab === EDIT_STUDY_TAB_ENUM.TAG ? renderTagEdit() : renderContentEdit()}
				</Box>
			</>
		</Modal>
	);
};

export default EditStudyModal;
