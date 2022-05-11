import React, { useEffect, useState } from 'react';
import StudyList from '@src/app/study/studyList/StudyList';
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

	const { filterOption } = state;

	useEffect(() => {
		// TODO
		// API 연동
		setState({ ...state, filterOption: { ...filterOption, categoryCode: [] as CategoryType[] } });
	}, [mainCategory]);

	const onClick = (category: CategoryType) => {
		setState({
			...state,
			filterOption: { ...filterOption, categoryCode: filterOption?.categoryCode?.filter((item) => item !== category) },
		});
	};

	return (
		<Container className="dekstop-study-list-container">
			<DesktopMainCategoryContainer onChange={setMainCategory} />
			{mainCategory && <DesktopSubCategoryContainer mainCategory={mainCategory} />}
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
