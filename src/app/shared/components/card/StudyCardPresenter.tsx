import React, { useMemo } from 'react';
import { Container, Typography } from '@material-ui/core';
import { Study } from '@api/types';
import ProgressBar from '@common/progress/ProgressBar';
import { getMainCategoryLabel, getSubCategoryLabel } from '@shared/utils/category';
import useWindowDimensions from '@src/hooks/useWindowDimensions';

import './index.scss';
import { getDday } from '../../utils/date';
import { frequencyMapper, locationMapper, weekdayMapper } from '../../utils/studyMapper';

interface PresenterProps {
	study: Study;
}
const StudyCardPresenter = ({ study }: PresenterProps): JSX.Element => {
	const { width } = useWindowDimensions();
	const isDesktop = useMemo(() => {
		return width > 1024;
	}, [width]);

	return (
		<Container className="study-card-container">
			<Container className="study-card-category-container">
				{isDesktop && <Container className="study-card-date">{getDday(study.dueDate)}</Container>}
				<span className="study-card-category">
					{getMainCategoryLabel(Number(study.categoryCode))} {'>'} {getSubCategoryLabel(Number(study.categoryCode))}
				</span>
				{!isDesktop && <Container className="study-card-date">{getDday(study.dueDate)}</Container>}
			</Container>
			<Typography className="study-card-title">{study.title}</Typography>
			<Typography className="study-card-tag">
				#{frequencyMapper[study.frequency]} #{weekdayMapper[study.weekday]} #{locationMapper[study.location]}
			</Typography>
			<ProgressBar max={study.capacity} current={study.membersCount} />
		</Container>
	);
};

export default StudyCardPresenter;
