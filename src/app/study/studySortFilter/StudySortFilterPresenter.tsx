import React from 'react';
import { Container } from '@material-ui/core';
import { IoOptions, IoChevronDown } from 'react-icons/io5';
import classNames from 'classnames';
import './index.scss';

interface IStudySortFilterPresenterProps {
	onClickFilter: () => void;
	onClickSort: () => void;
	sort: string;
	filterNum: number;
}

const StudySortFilterPresenter = ({
	onClickFilter,
	sort,
	onClickSort,
	filterNum,
}: IStudySortFilterPresenterProps): JSX.Element => {
	return (
		<Container className="study-sort-filter-presenter-container">
			<Container className="study-sort-filter-presenter-container-sort" onClick={onClickSort}>
				<span>{sort}</span>
				<IoChevronDown size={16} />
			</Container>
			<Container
				className={classNames('study-sort-filter-presenter-container-filter', { enabled: !!filterNum })}
				onClick={onClickFilter}
			>
				<IoOptions size={16} />
				{!!filterNum && <span className="study-sort-filter-presenter-filter-chip">{filterNum}</span>}
				<span>필터</span>
			</Container>
		</Container>
	);
};

export default StudySortFilterPresenter;
