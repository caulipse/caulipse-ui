import React from 'react';
import { MainCategoryType, CategoryType } from '@src/types';
import { Container, Typography, Grid } from '@material-ui/core';
import MainCategoryItem from '@src/app/main/MainCategoryItem';
import categories from '@src/const';
import { useHistory } from 'react-router-dom';
import girlWithLaptop from '@src/assets/img/illustration/girlWithLaptop.svg';
import mainTitle from '@src/assets/img/illustration/mainTitle.png';

import './index.scss';

const DesktopMainBanner = (): JSX.Element => {
	const history = useHistory();

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
		<Container className="desktop-main-banner">
			<Container className="desktop-main-banner-title-container">
				<img className="desktop-main-banner-title-img" src={mainTitle} alt="" />
				<Container>
					<Grid container className="desktop-main-banner-category-container">
						{categoryArr.map((category) => (
							<MainCategoryItem key={category.code} category={category} onClick={onClick} isDesktop />
						))}
					</Grid>
				</Container>
			</Container>
			<Container className="desktop-main-banner-image-container">
				<img src={girlWithLaptop} alt="" />
			</Container>
		</Container>
	);
};

export default DesktopMainBanner;
