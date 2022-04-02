import React, { ChangeEvent, useState, memo, useCallback } from 'react';
import { Container, Grid } from '@material-ui/core';
import Modal from '@common/modal/Modal';
import Chip from '@common/chip/Chip';
import CloseButton from '@common/iconButton/CloseButton';
import CommonButton from '@common/button/CommonButton';
import { ButtonTypeEnum } from '@common/button/types';
import { IModalContainerCommonProps } from '@common/modal/types';
import '@common/modal/common.scss';
import { IconAlignEnum } from '@common/iconButton/types';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import Switch from '@common/switch/Switch';
import './studyFilterModal.scss';

export const frequencies = ['1회', '주 2-4회', '주 5회 이상'];
export const days = ['월', '화', '수', '목', '금', '토', '일'];
export const places = [
	'중앙도서관',
	'학교 스터디룸',
	'일반카페',
	'스터디카페',
	'서울대입구, 낙성대',
	'흑석, 상도',
	'비대면',
	'기타',
];

// TODO
// 마감항목 표시 버튼 디자인 완료되면 반영 필요

const StudyFilterModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [state, setState] = useAtom(studyListState);
	const [filter, setFilter] = useState(state?.filterOption);
	const [isHide, setIsHide] = useState(false);

	const onClickCancel = () => {
		setFilter({ ...filter, weekday: [], frequency: [], location: [] });
	};

	const onClick = () => {
		// TODO
		// 마감항목 숨기기 API 연동
		setState({ ...state, filterOption: filter, paginationOption: { ...state?.paginationOption, pageNo: 1 } });
		onClose(false);
	};

	const onChange = (key: 'frequency' | 'location' | 'weekday', value: string) => {
		if (filter?.[key]?.includes(value)) {
			setFilter({ ...filter, [key]: filter?.[key]?.filter((item) => item !== value) });
		} else {
			/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
			key === 'location'
				? setFilter({ ...filter, location: filter?.location?.concat(value).slice(-3) })
				: setFilter({ ...filter, [key]: filter?.[key]?.concat(value) });
		}
	};

	const onChangeIsHide = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		setIsHide(evt.target.checked);
	}, []);

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
									onChange('frequency', item);
								};
								return (
									<Grid key={item} item xs={4} className="modal-chip-item">
										<Chip label={item} selected={filter?.frequency?.includes(item)} onClick={handleClick} />
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
									onChange('weekday', item);
								};
								return (
									<Chip key={item} label={item} selected={filter?.weekday?.includes(item)} onClick={handleClick} />
								);
							})}
						</Container>
					</Container>
					<Container className="study-filter-modal-row">
						<span>장소</span>
						<span className="study-filter-modal-sub-text">최대 3개까지 선택 가능합니다</span>
						<Container className="study-filter-modal-row-flex-container study-filter-modal-row-flex-container-places">
							{places.map((item) => {
								const handleClick = () => {
									onChange('location', item);
								};
								return (
									<Chip key={item} label={item} selected={filter?.location?.includes(item)} onClick={handleClick} />
								);
							})}
						</Container>
					</Container>
					<Container className="study-filter-modal-hide-row">
						<span className="study-filter-modal-hide-row-title">마감항목 숨기기</span>
						<Switch onChange={onChangeIsHide} checked={isHide} />
					</Container>
				</Container>
				<CommonButton type={ButtonTypeEnum.secondary} title="적용" onClick={onClick} />
			</Container>
		</Modal>
	);
};

export default memo(StudyFilterModal);
