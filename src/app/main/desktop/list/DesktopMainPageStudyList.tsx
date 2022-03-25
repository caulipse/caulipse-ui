import React from 'react';
import { MainCategoryType } from '@src/types';
import { Container, Typography } from '@material-ui/core';
import Loader from '@common/loader/Loader';
import StudyCardContainer from '@src/app/shared/components/card/StudyCardContainer';
import fetchStudies from '@src/hooks/remotes/study/useFetchStudies';
import { Study } from '@api/types';
import './index.scss';

const DesktopMainPageStudyList = (): JSX.Element => {
	const { data, isLoading } = fetchStudies('최근 등록순');
	const studies = data?.studies || ([] as Study[]);

	return (
		<Container className="desktop-main-page-study-list-container">
			<Typography>곧 마감이되는 스터디들이에요!</Typography>
			{isLoading ? <Loader /> : studies && studies?.map((study) => <StudyCardContainer study={study} key={study.id} />)}
		</Container>
	);
};

export default DesktopMainPageStudyList;
