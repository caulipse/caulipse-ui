import React, { useEffect, useState } from 'react';
import StudyList from '@src/app/study/studyList/StudyList';
import DesktopMainCategoryContainer from '@src/app/study/desktop/mainCategory/DesktopMainCategoryContainer';
import StudySortFilterContainer from '@study/studySortFilter/StudySortFilterContainer';
import DesktopSubCategoryContainer from '@src/app/study/desktop/subCategory/DesktopSubCategoryContainer';
import { MainCategoryType } from '@src/types';
import { Container } from '@material-ui/core';
import DesktopStudySidebar from '@src/app/study/desktop/sidebar/DesktopStudySidebar';
import { useHistory, useLocation } from 'react-router-dom';
import './index.scss';

const MobileStudyPage = (): JSX.Element => {
	const [mainCategory, setMainCategory] = useState<MainCategoryType>();
	const history = useHistory();
	const location = useLocation();
	const { pathname } = location;

	const path = pathname.split('study/')[1];

	useEffect(() => {
		if (mainCategory) {
			history.push(`/study/${mainCategory.path}`);
		}
	}, [mainCategory]);

	return (
		<Container className="dekstop-study-list-container">
			<DesktopMainCategoryContainer onChange={setMainCategory} />
			{path && <DesktopSubCategoryContainer />}
			<Container className="dekstop-study-list-content-container">
				<DesktopStudySidebar />
				<Container className="desktop-study-list-content">
					<StudySortFilterContainer />
					<StudyList />
				</Container>
			</Container>
		</Container>
	);
};

export default MobileStudyPage;
