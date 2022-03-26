import React, { memo } from 'react';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@common/modal/enum';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import StudySortFilterPresenter from './StudySortFilterPresenter';

const StudySortFilterContainter = (): JSX.Element => {
	const { openModal } = useModal();
	const [state] = useAtom(studyListState);

	const onClickFilter = () => {
		openModal(ModalKeyEnum.StudyFilterModal);
	};

	const onClickSort = () => {
		openModal(ModalKeyEnum.StudySortModal);
	};

	const { sortOption } = state;

	return <StudySortFilterPresenter onClickFilter={onClickFilter} onClickSort={onClickSort} sort={sortOption?.label} />;
};

export default memo(StudySortFilterContainter);
