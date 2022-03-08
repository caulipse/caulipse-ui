import React from 'react';
import { Container } from '@material-ui/core';
import { IoOptions, IoChevronDown } from 'react-icons/io5';
import './index.scss';

interface IStudySortFilterPresenterProps {
	onClickFilter: () => void;
	onClickSort: () => void;
	sort: string;
}

const StudySortFilterPresenter = ({
	onClickFilter,
	sort,
	onClickSort,
}: IStudySortFilterPresenterProps): JSX.Element => {
	return (
		<Container className="study-sort-filter-presenter-container">
			<Container className="study-sort-filter-presenter-container-sort" onClick={onClickSort}>
				<span>{sort}</span>
				<IoChevronDown size={16} />
			</Container>
			<Container className="study-sort-filter-presenter-container-filter" onClick={onClickFilter}>
				<IoOptions size={16} />
				<span>필터</span>
			</Container>
		</Container>
	);
};

export default StudySortFilterPresenter;
