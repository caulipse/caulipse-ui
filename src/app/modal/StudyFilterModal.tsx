import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import Modal from '@common/modal/Modal';
import Chip from '@common/chip/Chip';
import CloseButton from '@common/iconButton/CloseButton';
import CommonButton from '@common/button/CommonButton';
import { ButtonTypeEnum } from '@common/button/types';
import { IModalContainerCommonProps } from '@common/modal/types';
import '@common/modal/common.scss';
import { IconAlignEnum } from '@common/iconButton/types';
import './studyFilterModal.scss';

const frequencies = ['주 1회', '주 2~4회', '주 5회 이상'];
const days = ['월', '화', '수', '목', '금', '토', '일'];
const places = [
	'중앙도서관',
	'학교스터디룸',
	'일반 카페',
	'스터디카페',
	'서울대입구, 낙성대',
	'흑석, 상도',
	'비대면',
	'기타',
];

// TODO
// 마감항목 표시 버튼 디자인 완료되면 반영 필요

const StudyFilterModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [selectedFrequencies, setSelectedFrequencies] = useState([] as string[]);
	const [selectedDays, setSelectedDays] = useState([] as string[]);
	const [selectedPlaces, setSelectedPlaces] = useState([] as string[]);

	const onClickCancel = () => {
		// TODO
		// 필터 clear 로직
	};

	const onClick = () => {
		// TODO
		// 필터 적용 API 연동
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
			setSelectedPlaces(selectedPlaces.concat(value).slice(-3));
		}
	};

	return (
		<Modal open={open} onClose={onClose} height="44.25rem">
			<Container className="modal-root-container modal-space-between-container">
				<Container>
					<Container className="modal-title-container study-filter-modal-title-container">
						<CloseButton align={IconAlignEnum.left} onClick={() => onClose(false)} />
						<span>세부 필터</span>
						<span className="study-filter-modal-clear-button" onClick={onClickCancel}>
							초기화
						</span>
					</Container>
					<Container className="study-filter-modal-row">
						<span>스터디 빈도</span>
						<Grid container spacing={1}>
							{frequencies.map((item) => {
								const handleClick = () => {
									onChangeFrequencies(item);
								};
								return (
									<Grid key={item} item xs={4} className="modal-chip-item">
										<Chip label={item} selected={selectedFrequencies.includes(item)} onClick={handleClick} />
									</Grid>
								);
							})}
						</Grid>
					</Container>
					<Container className="study-filter-modal-row">
						<span>요일</span>
						<Container className="study-filter-modal-row-flex-container study-filter-modal-row-flex-container-days">
							{days.map((item) => {
								const handleClick = () => {
									onChangeDays(item);
								};
								return <Chip key={item} label={item} selected={selectedDays.includes(item)} onClick={handleClick} />;
							})}
						</Container>
					</Container>
					<Container className="study-filter-modal-row">
						<span>장소</span>
						<span className="study-filter-modal-sub-text">최대 3개까지 선택 가능합니다</span>
						<Container className="study-filter-modal-row-flex-container study-filter-modal-row-flex-container-places">
							{places.map((item) => {
								const handleClick = () => {
									onChangePlaces(item);
								};
								return <Chip key={item} label={item} selected={selectedPlaces.includes(item)} onClick={handleClick} />;
							})}
						</Container>
					</Container>
				</Container>
				<CommonButton type={ButtonTypeEnum.secondary} title="적용" onClick={onClick} />
			</Container>
		</Modal>
	);
};

export default StudyFilterModal;