import { Box, Button } from '@material-ui/core';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import './editStudyModal.scss';
import 'react-datepicker/dist/react-datepicker.css';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import { useAtom } from 'jotai';
import { modalState } from '@src/state';
import usePatchStudy from '@src/hooks/remotes/study/usePatchStudy';
import { frequencyEnum, locationEnum, weekdayEnum } from '@src/api/types';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import useModal from '@src/hooks/modal/useModal';
import { useQueryClient } from 'react-query';
import QUERY_KEY from '@src/hooks/remotes';
import { getMainCategoryCode } from '../shared/utils/category';
import StudySelect from '../study/studyModal/studySelect';
import StudyContent from '../study/studyModal/studyContent';

const EDIT_STUDY_TAB_ENUM = {
	TAG: '태그 수정',
	CONTENT: '글 수정',
};

const EditStudyModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [state] = useAtom(modalState);
	const initialStudyData = state.params?.studyData;
	const patchStudy = usePatchStudy();
	const { openSnackbar } = useSnackbar();
	const { closeModal } = useModal();

	const [currentTab, setCurrentTab] = useState(EDIT_STUDY_TAB_ENUM.TAG);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date(initialStudyData.createdAt));
	const [selectedCapacity, setSelectedcapacity] = useState<number>(initialStudyData.capacity);
	const [selectedMainCategoryCode, setSelectedMainCategoryCode] = useState<number>(
		getMainCategoryCode(initialStudyData.categoryCode)
	);
	const [selectedSubCategoryCode, setSelectedSubCategoryCode] = useState<number>(initialStudyData.categoryCode);
	const [selectedFrequencies, setSelectedFrequencies] = useState<frequencyEnum | ''>(initialStudyData.frequency);
	const [selectedDays, setSelectedDays] = useState<weekdayEnum[]>(initialStudyData.weekday);
	const [selectedPlaces, setSelectedPlaces] = useState<locationEnum[]>(initialStudyData.location);
	const [selectedTitle, setSelectedTitle] = useState<string>(initialStudyData.title);
	const [selectedContent, setSelectedContent] = useState<string>(initialStudyData.studyAbout);

	const client = useQueryClient();

	const handleEdit = () => {
		patchStudy.mutate(
			{
				id: initialStudyData.id,
				data: {
					capacity: selectedCapacity,
					categoryCode: selectedSubCategoryCode,
					// createdAt: selectedDate,
					location: selectedPlaces,
					studyAbout: selectedContent,
					title: selectedTitle,
					weekday: selectedDays,
					frequency: selectedFrequencies,
				},
			},
			{
				onSuccess: () => {
					openSnackbar('스터디 모집글 수정 완료');
					client.refetchQueries(`${QUERY_KEY.FETCH_STUDY}/${initialStudyData.id}`);
					closeModal();
				},
			}
		);
	};

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

	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<>
				{renderHeader()}
				<Box className="edit-study-modal-body-con">
					{currentTab === EDIT_STUDY_TAB_ENUM.TAG ? (
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
							initialMembersCount={initialStudyData.membersCount}
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
				<CommonButton
					type={ButtonTypeEnum.primary}
					title="수정완료"
					onClick={handleEdit}
					className="edit-study-modal-cta-btn"
				/>
			</>
		</Modal>
	);
};

export default EditStudyModal;
