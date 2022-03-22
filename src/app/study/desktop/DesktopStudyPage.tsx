import React, { useEffect, useState } from 'react';
import StudyListContainter from '@src/app/study/studyList/StudyListContainer';
import DesktopMainCategoryContainer from '@src/app/study/desktop/mainCategory/DesktopMainCategoryContainer';
import StudySortFilterContainer from '@study/studySortFilter/StudySortFilterContainer';
import DesktopSubCategoryContainer from '@src/app/study/desktop/subCategory/DesktopSubCategoryContainer';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import { MainCategoryType, CategoryType } from '@src/types';
import { Container } from '@material-ui/core';
import DesktopStudySidebar from '@src/app/study/desktop/sidebar/DesktopStudySidebar';
import './index.scss';

const MobileStudyPage = (): JSX.Element => {
	const [mainCategory, setMainCategory] = useState<MainCategoryType>();
	const [state, setState] = useAtom(studyListState);

	const { selectedSubCategories } = state;

	useEffect(() => {
		// TODO
		// API 연동
		setState({ ...state, selectedSubCategories: [] as CategoryType[] });
	}, [mainCategory]);

	const onClick = (category: CategoryType) => {
		setState({ ...state, selectedSubCategories: selectedSubCategories.filter((item) => item !== category) });
	};

	return (
		<Container className="dekstop-study-list-container">
			<DesktopMainCategoryContainer onChange={setMainCategory} />
			{mainCategory && <DesktopSubCategoryContainer mainCategory={mainCategory} />}
			<Container>
				<StudySortFilterContainer />
				<Container className="desktop-study-list-content">
					<StudyListContainter />
					<DesktopStudySidebar />
				</Container>
			</Container>
		</Container>
	);
};

export default MobileStudyPage;
