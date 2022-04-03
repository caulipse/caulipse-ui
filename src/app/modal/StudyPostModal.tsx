import { Box, Button, Grid } from '@material-ui/core';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import categories from '@src/const';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import StudyContent from '../study/studyModal/studyContent';
import StudySelect from '../study/studyModal/studySelect';
import './studyPostModal.scss';

const StudyPostModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [selectedMainCategoryCode, setSelectedMainCategoryCode] = useState<number>(0);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [selectedCapacity, setSelectedCapcity] = useState<number>(2);
	const [selectedSubCategoryCode, setSelectedSubCategoryCode] = useState<number>(0);
	const [selectedFrequencies, setSelectedFrequencies] = useState<string>('');
	const [selectedDays, setSelectedDays] = useState<string[]>([] as string[]);
	const [selectedPlaces, setSelectedPlaces] = useState<string[]>([] as string[]);
	const [selectedTitle, setSelectedTitle] = useState<string>('');
	const [selectedContent, setSelectedContent] = useState<string>('');

	const handleNextBtn = useCallback(() => {
		setCurrentStep((step) => step + 1);
	}, [currentStep]);

	const handlePrevBtn = useCallback(() => {
		setCurrentStep((step) => step - 1);
	}, [currentStep]);

	const Header = useCallback(() => {
		return (
			<Box className="study-post-modal-header-con">
				<IoClose className="study-post-modal-icon" color="#ffffff" onClick={() => onClose(false)} />
				<Box className="study-post-modal-header-title">
					{currentStep === 0 ? 'Logo' : `세부조건 (${currentStep + 1}/3)`}
				</Box>
				<Box className="study-post-modal-icon" />
			</Box>
		);
	}, [currentStep]);

	const MainCategorySelect = useCallback(() => {
		return (
			<>
				<Box className="study-post-modal-category-header">
					<Box className="study-post-modal-category-text">카테고리를 선택해주세요</Box>
					<Box className="study-post-modal-category-bold-text">어떤 스터디를 모집할까요?</Box>
				</Box>
				<Grid container className="study-post-modal-category-grid-con">
					{categories.map((item) => (
						<Grid item key={item.code} xs={4}>
							<Button
								onClick={() => setSelectedMainCategoryCode(item.code)}
								className={classNames('study-post-modal-category-item-con', {
									'study-post-modal-category-item-con-selected': item.code === selectedMainCategoryCode,
								})}
							>
								<Box>{item.label}</Box>
							</Button>
						</Grid>
					))}
				</Grid>
			</>
		);
	}, [categories, selectedMainCategoryCode]);

	const renderCtaBtn = useCallback(() => {
		if (currentStep === 0) {
			return (
				<CommonButton
					type={ButtonTypeEnum.primary}
					title="확인"
					onClick={handleNextBtn}
					className="study-post-modal-cta-btn"
					disabled={!selectedMainCategoryCode}
				/>
			);
		}

		return (
			<Box className="study-post-modal-cta-con">
				<CommonButton
					type={ButtonTypeEnum.secondary}
					title="이전"
					onClick={handlePrevBtn}
					className="study-post-modal-cta-btn flex1"
				/>
				<CommonButton
					type={ButtonTypeEnum.primary}
					title="다음"
					onClick={handleNextBtn}
					className="study-post-modal-cta-btn flex2"
					disabled={
						currentStep === 1
							? !(
									selectedDate &&
									selectedCapacity &&
									selectedSubCategoryCode &&
									selectedFrequencies &&
									selectedDays &&
									selectedPlaces
							  )
							: !(selectedTitle && selectedContent)
					}
				/>
			</Box>
		);
	}, [currentStep, selectedMainCategoryCode]);

	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<>
				<Header />
				<Box className="study-post-modal-body-con">
					{currentStep === 0 ? (
						<MainCategorySelect />
					) : currentStep === 1 ? (
						<StudySelect
							selectedDate={selectedDate}
							setSelectedDate={setSelectedDate}
							selectedCapacity={selectedCapacity}
							setSelectedCapacity={setSelectedCapcity}
							selectedMainCategoryCode={selectedMainCategoryCode}
							setSelectedMainCategoryCode={setSelectedMainCategoryCode}
							selectedSubCategoryCode={selectedSubCategoryCode}
							setSelectedSubCategoryCode={setSelectedSubCategoryCode}
							selectedFrequencies={selectedFrequencies}
							setSelectedFrequencies={setSelectedFrequencies}
							selectedDays={selectedDays}
							setSelectedDays={setSelectedDays}
							selectedPlaces={selectedPlaces}
							setSelectedPlaces={setSelectedPlaces}
						/>
					) : (
						<StudyContent
							selectedContent={selectedContent}
							selectedTitle={selectedTitle}
							setSelectedTitle={setSelectedTitle}
							setSelectedContent={setSelectedContent}
						/>
					)}
				</Box>
				{renderCtaBtn()}
			</>
		</Modal>
	);
};

export default StudyPostModal;
