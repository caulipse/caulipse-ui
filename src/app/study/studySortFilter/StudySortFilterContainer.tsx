import React, { memo, useMemo } from 'react';
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

	const { sortOption, filterOption } = state;

	const filterNum = useMemo(() => {
		const { frequency, weekday, location } = filterOption;
		return Number(!!frequency?.length) + Number(!!weekday?.length) + Number(!!location?.length);
	}, [filterOption]);

	return (
		<StudySortFilterPresenter
			onClickFilter={onClickFilter}
			onClickSort={onClickSort}
			sort={sortOption?.label}
			filterNum={filterNum}
		/>
	);
};

export default memo(StudySortFilterContainter);
