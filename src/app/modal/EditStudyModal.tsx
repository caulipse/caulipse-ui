import { Box, Button } from '@material-ui/core';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import classNames from 'classnames';
import DatePicker, { CalendarContainer, registerLocale, setDefaultLocale } from 'react-datepicker';
import React, { useCallback, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import './editStudyModal.scss';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ko', ko);

const EDIT_STUDY_TAB_ENUM = {
	TAG: '태그 수정',
	CONTENT: '글 수정',
};

const EditStudyModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [currentTab, setCurrentTab] = useState(EDIT_STUDY_TAB_ENUM.TAG);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());

	const renderHeader = useCallback(() => {
		return (
			<>
				<Box style={{ backgroundColor: 'green' }} className="edit-study-modal-header-con">
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
				</Box>
			</>
		</Modal>
	);
};

export default EditStudyModal;
