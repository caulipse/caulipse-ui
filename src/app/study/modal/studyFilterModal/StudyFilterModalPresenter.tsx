import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Modal from '@common/modal/Modal';
import Chip from '@common/chip/Chip';
import CloseIcon from '@common/icon/CloseIcon';
import PrimaryButton from '@common/button/PrimaryButton';
import OutlineButton from '@common/button/OutlineButton';
import { IModalContainerCommonProps } from '@common/modal/types';
import '@common/modal/common.scss';
import './index.scss';

interface IStudyFilterModalPresenterProps extends IModalContainerCommonProps {
	onClick: () => void;
	onClickCancel: () => void;
	selectedFrequencies: string[];
	onChangeFrequencies: (params: string) => void;
	selectedDays: string[];
	onChangeDays: (params: string) => void;
	selectedPlaces: string[];
	onChangePlaces: (params: string) => void;
}

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

const StudyFilterModalPresenter = ({
	open,
	onClose,
	onClick,
	onClickCancel,
	selectedFrequencies,
	onChangeFrequencies,
	selectedDays,
	onChangeDays,
	selectedPlaces,
	onChangePlaces,
}: IStudyFilterModalPresenterProps): JSX.Element => {
	return (
		<Modal open={open} onClose={onClose} height="40.438rem">
			<Container className="modal-root-container modal-space-between-container">
				<Container>
					<Container className="modal-title-container">
						<CloseIcon onClick={() => onClose(false)} />
					</Container>
					<Container className="study-filter-modal-row">
						<span>스터디 빈도</span>
						<Grid container spacing={1}>
							{frequencies.map((item) => {
								const handleClick = () => {
									onChangeFrequencies(item);
								};
								return (
									<Grid key={item} item xs={4} className="my-category-modal-chip-item">
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
				<Container className="study-filter-modal-button-container">
					<OutlineButton title="초기화" onClick={onClickCancel} />
					<PrimaryButton title="확인" onClick={onClick} />
				</Container>
			</Container>
		</Modal>
	);
};

export default StudyFilterModalPresenter;
