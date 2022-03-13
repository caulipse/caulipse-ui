import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Study } from '@api/types';
import './index.scss';
import { getMainCategoryLabel, getSubCategoryLabel } from '../../utils/category';

interface PresenterProps {
	study: Study;
}
const StudyCardPresenter = ({ study }: PresenterProps): JSX.Element => (
	<Container className="study-card-container">
		<Container className="study-card-category-container">
			<Container className="study-card-date">D-16</Container>
			<span className="study-card-category">
				{getMainCategoryLabel(Number(study.categoryCode))} {'>'} {getSubCategoryLabel(Number(study.categoryCode))}
			</span>
		</Container>
		<Typography className="study-card-title">{study.title}</Typography>
		<Typography className="study-card-tag">
			#{study.frequency} #{study.weekday} #{study.location}
		</Typography>
		<Container className="study-card-progress-container">
			<progress className="study-card-progress" max={study.capacity} value={study.vacancy} />
			<span className="study-card-progress-vacancy">{study.vacancy}</span>
			<span className="study-card-progress-capacity">/{study.capacity}</span>
		</Container>
	</Container>
);

export default StudyCardPresenter;
