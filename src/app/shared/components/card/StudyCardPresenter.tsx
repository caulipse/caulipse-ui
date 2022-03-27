import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Study } from '@api/types';
import ProgressBar from '@common/progress/ProgressBar';
import { getMainCategoryLabel, getSubCategoryLabel } from '@shared/utils/category';
import './index.scss';

interface PresenterProps {
	study: Study;
}
const StudyCardPresenter = ({ study }: PresenterProps): JSX.Element => (
	<Container className="study-card-container">
		<Container className="study-card-category-container">
			<span className="study-card-category">
				{getMainCategoryLabel(Number(study.categoryCode))} {'>'} {getSubCategoryLabel(Number(study.categoryCode))}
			</span>
			<Container className="study-card-date">D-16</Container>
		</Container>
		<Typography className="study-card-title">{study.title}</Typography>
		<Typography className="study-card-tag">
			#{study.frequency} #{study.weekday} #{study.location}
		</Typography>
		<ProgressBar max={study.capacity} current={study.membersCount} />
	</Container>
);

export default StudyCardPresenter;
