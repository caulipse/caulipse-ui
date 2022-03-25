import React from 'react';
import { MainCategoryType, CategoryType } from '@src/types';
import { Container, Typography, Grid } from '@material-ui/core';
import MainCategoryItem from '@src/app/main/MainCategoryItem';
import categories from '@src/const';
import Loader from '@common/loader/Loader';
import StudyCardContainer from '@src/app/shared/components/card/StudyCardContainer';
import fetchStudies from '@src/hooks/remotes/study/useFetchStudies';
import { Study } from '@api/types';
import { useHistory } from 'react-router-dom';
import MainButton from '../button/MainButton';
import './index.scss';

const MobileMainPage = (): JSX.Element => {
	const history = useHistory();
	const { data, isLoading } = fetchStudies('최근 등록순');
	const studies = data?.studies || ([] as Study[]);

	const onClick = (category: MainCategoryType) => {
		if (category.path === '') {
			history.push('/study');
		} else {
			history.push(`/study/${category.path}`);
		}
	};

	const categoryArr = [
		{
			label: '전체',
			path: '',
			code: 0,
			subCategories: [] as CategoryType[],
		},
	].concat(categories);

	return (
		<>
			<Container className="mobile-main-page-main-category-container">
				<Grid container className="mobile-main-page-main-category-grid">
					{categoryArr.map((category) => (
						<MainCategoryItem key={category.code} category={category} onClick={onClick} />
					))}
				</Grid>
			</Container>
			<Container className="mobile-main-page-study-list-container">
				<Typography>곧 마감이되는 스터디들이에요!</Typography>
				{isLoading ? (
					<Loader />
				) : (
					studies && studies?.map((study) => <StudyCardContainer study={study} key={study.id} />)
				)}
			</Container>
			<MainButton />
		</>
	);
};

export default MobileMainPage;
