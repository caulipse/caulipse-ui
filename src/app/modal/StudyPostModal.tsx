import { Box, Button, Grid } from '@material-ui/core';
import { frequencyEnum, locationEnum, weekdayEnum } from '@src/api/types';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import categories from '@src/const';
import logoDefaultWhite from '@src/assets/img/logo/logoDefaultWhite.svg';
import usePostStudy from '@src/hooks/remotes/study/usePostStudy';
import classNames from 'classnames';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import bgLanguageSquare from '@src/assets/img/category/imageSquare/language.png';
import bgCertificateSquare from '@src/assets/img/category/imageSquare/certificate.png';
import bgDailySquare from '@src/assets/img/category/imageSquare/daily.png';
import bgEmploymentSquare from '@src/assets/img/category/imageSquare/employment.png';
import bgExamSquare from '@src/assets/img/category/imageSquare/exam.png';
import bgProgrammingSquare from '@src/assets/img/category/imageSquare/programming.png';
import bgCompetitionSquare from '@src/assets/img/category/imageSquare/competition.png';
import bgTotalSquare from '@src/assets/img/category/imageSquare/total.png';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import StudyContent from '../study/studyModal/studyContent';
import StudySelect from '../study/studyModal/studySelect';
import './studyPostModal.scss';

const categoryImageMapper = (code: number) => {
	switch (code) {
		case 100:
			return bgLanguageSquare;
		case 200:
			return bgEmploymentSquare;
		case 300:
			return bgProgrammingSquare;
		case 400:
			return bgExamSquare;
		case 500:
			return bgCertificateSquare;
		case 600:
			return bgDailySquare;
		case 700:
			return bgCompetitionSquare;
		default:
			return bgTotalSquare;
	}
};

const StudyPostModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const postStudy = usePostStudy();
	const { openSnackbar } = useSnackbar();

	const [currentStep, setCurrentStep] = useState<number>(0);
	const [selectedMainCategoryCode, setSelectedMainCategoryCode] = useState<number>(0);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000));
	const [selectedCapacity, setSelectedcapacity] = useState<number>(2);
	const [selectedSubCategoryCode, setSelectedSubCategoryCode] = useState<number>(0);
	const [selectedFrequencies, setSelectedFrequencies] = useState<frequencyEnum | ''>('');
	const [selectedDays, setSelectedDays] = useState<weekdayEnum[]>([] as weekdayEnum[]);
	const [selectedPlaces, setSelectedPlaces] = useState<locationEnum[]>([] as locationEnum[]);
	const [selectedTitle, setSelectedTitle] = useState<string>('');
	const [selectedContent, setSelectedContent] = useState<string>('');

	const handleNextBtn = useCallback(() => {
		setCurrentStep((step) => step + 1);
	}, [currentStep]);

	const handlePrevBtn = useCallback(() => {
		setCurrentStep((step) => step - 1);
	}, [currentStep]);

	const handlePostStudy = () => {
		postStudy.mutate(
			{
				title: selectedTitle,
				studyAbout: selectedContent,
				weekday: selectedDays,
				frequency: selectedFrequencies,
				location: selectedPlaces,
				capacity: selectedCapacity,
				categoryCode: selectedSubCategoryCode,
				dueDate: format(selectedDate, 'yyyy-MM-dd 00:00:00'),
			},
			{
				onSuccess: () => {
					onClose(false);
					window.location.reload();
					openSnackbar('스터디 모집글 등록 완료');
				},
			}
		);
	};

	useEffect(() => {
		if (postStudy.isError) {
			// eslint-disable-next-line no-alert
			window.alert('게시물 등록에 실패하였습니다.');
		}
	}, [postStudy.isError]);

	const Header = useCallback(() => {
		return (
			<Box className="study-post-modal-header-con">
				<IoClose className="study-post-modal-icon" color="#ffffff" onClick={() => onClose(false)} />
				<Box className="study-post-modal-header-title">
					{currentStep === 0 ? (
						<img src={logoDefaultWhite} alt="" className="header-logo" />
					) : (
						`세부조건 (${currentStep + 1}/3)`
					)}
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
								style={{
									background: `linear-gradient(rgba(0, 40, 87, 0.6), rgba(0, 40, 87, 0.6)), url(${categoryImageMapper(
										item.code
									)})`,
								}}
							>
								<Box className="study-post-modal-category-item-text">{item.label}</Box>
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
					title="다음"
					onClick={handleNextBtn}
					className="study-post-modal-cta-btn"
					disabled={!selectedMainCategoryCode}
				/>
			);
		}

		return (
			<>
				<CommonButton
					type={ButtonTypeEnum.secondary}
					title="이전"
					onClick={handlePrevBtn}
					className="study-post-modal-cta-btn flex1"
				/>
				<CommonButton
					type={ButtonTypeEnum.primary}
					title={currentStep === 2 ? '글 등록하기!' : '다음'}
					onClick={currentStep === 2 ? handlePostStudy : handleNextBtn}
					className="study-post-modal-cta-btn flex2"
					disabled={
						currentStep === 1
							? !(
									selectedDate &&
									selectedCapacity &&
									selectedSubCategoryCode &&
									selectedFrequencies &&
									selectedDays?.length &&
									selectedPlaces?.length
							  )
							: !(selectedTitle && selectedContent)
					}
				/>
			</>
		);
	}, [
		currentStep,
		selectedMainCategoryCode,
		selectedDate,
		selectedCapacity,
		selectedSubCategoryCode,
		selectedFrequencies,
		selectedDays,
		selectedPlaces,
		selectedTitle,
		selectedContent,
	]);

	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<>
				<Box className="study-post-modal-flex">
					<Header />
					<Box className="study-post-modal-body-con">
						{currentStep === 0 ? (
							<MainCategorySelect />
						) : currentStep === 1 ? (
							<StudySelect
								selectedDate={selectedDate}
								setSelectedDate={setSelectedDate}
								selectedCapacity={selectedCapacity}
								setSelectedCapacity={setSelectedcapacity}
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
				</Box>
				<Box className="study-post-modal-cta-con">{renderCtaBtn()}</Box>
			</>
		</Modal>
	);
};

export default StudyPostModal;
