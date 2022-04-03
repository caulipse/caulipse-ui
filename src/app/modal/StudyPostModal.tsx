import { Box, Button, Grid } from '@material-ui/core';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import categories from '@src/const';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import './studyPostModal.scss';

const StudyPostModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [selectedMainCategoryCode, setSelectedMainCategoryCode] = useState<number | undefined>();

	const MainCategorySelect = useCallback(() => {
		return (
			<>
				<Box className="study-post-modal-header-con">
					<IoClose className="study-post-modal-icon" color="#ffffff" onClick={() => onClose(false)} />
					<Box>Logo</Box>
					<Box className="study-post-modal-icon" />
				</Box>
				<Box className="study-post-modal-category-header">
					<Box className="study-post-modal-category-header-text">카테고리를 선택해주세요</Box>
					<Box className="study-post-modal-category-header-bold-text">어떤 스터디를 모집할까요?</Box>
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

	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<>
				<MainCategorySelect />
			</>
		</Modal>
	);
};

export default StudyPostModal;
